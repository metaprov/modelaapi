# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/modelclass/v1/modelclass.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nEgithub.com/metaprov/modelaapi/services/modelclass/v1/modelclass.proto\x12/github.com.metaprov.modelaapi.services.study.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1aHgithub.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"7\n\x14GetModelClassRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x7f\n\x15GetModelClassResponse\x12X\n\nmodelclass\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"\xbd\x01\n\x15ListModelClassRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x62\n\x06labels\x18\x03 \x03(\x0b\x32R.github.com.metaprov.modelaapi.services.study.v1.ListModelClassRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x91\x01\n\x16ListModelClassResponse\x12^\n\x0cmodelclasses\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClassList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"s\n\x17\x43reateModelClassRequest\x12X\n\nmodelclass\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass\"\x1a\n\x18\x43reateModelClassResponse\"\xa3\x01\n\x17UpdateModelClassRequest\x12X\n\nmodelclass\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelClass\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x98\x01\n\x1e\x43reateModelClassProfileRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12U\n\x0cmodelclasses\x18\x03 \x03(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\"O\n\x1f\x43reateModelClassProfileResponse\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0b\n\x03uri\x18\x03 \x01(\t\"N\n\x1bGetModelClassProfileRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0e\n\x06models\x18\x03 \x01(\x05\":\n\x17\x44\x65leteModelClassRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1a\n\x18\x44\x65leteModelClassResponse\"\x1a\n\x18UpdateModelClassResponse\"<\n\x19ModelClassTrainNowRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1c\n\x1aModelClassTrainNowResponse\">\n\x1bModelClassPredictNowRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1e\n\x1cModelClassPredictNowResponse2\xf6\r\n\x11ModelClassService\x12\xc9\x01\n\x10ListModelClasses\x12\x46.github.com.metaprov.modelaapi.services.study.v1.ListModelClassRequest\x1aG.github.com.metaprov.modelaapi.services.study.v1.ListModelClassResponse\"$\x82\xd3\xe4\x93\x02\x1e\x12\x1c/v1/modelclasses/{namespace}\x12\xc4\x01\n\x10\x43reateModelClass\x12H.github.com.metaprov.modelaapi.services.study.v1.CreateModelClassRequest\x1aI.github.com.metaprov.modelaapi.services.study.v1.CreateModelClassResponse\"\x1b\x82\xd3\xe4\x93\x02\x15\"\x10/v1/modelclasses:\x01*\x12\xcb\x01\n\rGetModelClass\x12\x45.github.com.metaprov.modelaapi.services.study.v1.GetModelClassRequest\x1a\x46.github.com.metaprov.modelaapi.services.study.v1.GetModelClassResponse\"+\x82\xd3\xe4\x93\x02%\x12#/v1/modelclasses/{namespace}/{name}\x12\xfa\x01\n\x10UpdateModelClass\x12H.github.com.metaprov.modelaapi.services.study.v1.UpdateModelClassRequest\x1aI.github.com.metaprov.modelaapi.services.study.v1.UpdateModelClassResponse\"Q\x82\xd3\xe4\x93\x02K\x1a\x46/v1/studies/{modelclass.metadata.namespace}/{modelclass.metadata.name}:\x01*\x12\xd4\x01\n\x10\x44\x65leteModelClass\x12H.github.com.metaprov.modelaapi.services.study.v1.DeleteModelClassRequest\x1aI.github.com.metaprov.modelaapi.services.study.v1.DeleteModelClassResponse\"+\x82\xd3\xe4\x93\x02%*#/v1/modelclasses/{namespace}/{name}\x12\xf1\x01\n\x17\x43reateModelClassProfile\x12O.github.com.metaprov.modelaapi.services.study.v1.CreateModelClassProfileRequest\x1aP.github.com.metaprov.modelaapi.services.study.v1.CreateModelClassProfileResponse\"3\x82\xd3\xe4\x93\x02-\"+/v1/modelclasses/{namespace}/{name}/profile\x12\xd6\x01\n\x08TrainNow\x12J.github.com.metaprov.modelaapi.services.study.v1.ModelClassTrainNowRequest\x1aK.github.com.metaprov.modelaapi.services.study.v1.ModelClassTrainNowResponse\"1\x82\xd3\xe4\x93\x02+\")/v1/modelclasses/{namespace}/{name}/train\x12\xde\x01\n\nPredictNow\x12L.github.com.metaprov.modelaapi.services.study.v1.ModelClassPredictNowRequest\x1aM.github.com.metaprov.modelaapi.services.study.v1.ModelClassPredictNowResponse\"3\x82\xd3\xe4\x93\x02-\"+/v1/modelclasses/{namespace}/{name}/predictB1Z/github.com/metaprov/modelaapi/services/study/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.modelclass.v1.modelclass_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z/github.com/metaprov/modelaapi/services/study/v1'
  _LISTMODELCLASSREQUEST_LABELSENTRY._options = None
  _LISTMODELCLASSREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _MODELCLASSSERVICE.methods_by_name['ListModelClasses']._options = None
  _MODELCLASSSERVICE.methods_by_name['ListModelClasses']._serialized_options = b'\202\323\344\223\002\036\022\034/v1/modelclasses/{namespace}'
  _MODELCLASSSERVICE.methods_by_name['CreateModelClass']._options = None
  _MODELCLASSSERVICE.methods_by_name['CreateModelClass']._serialized_options = b'\202\323\344\223\002\025\"\020/v1/modelclasses:\001*'
  _MODELCLASSSERVICE.methods_by_name['GetModelClass']._options = None
  _MODELCLASSSERVICE.methods_by_name['GetModelClass']._serialized_options = b'\202\323\344\223\002%\022#/v1/modelclasses/{namespace}/{name}'
  _MODELCLASSSERVICE.methods_by_name['UpdateModelClass']._options = None
  _MODELCLASSSERVICE.methods_by_name['UpdateModelClass']._serialized_options = b'\202\323\344\223\002K\032F/v1/studies/{modelclass.metadata.namespace}/{modelclass.metadata.name}:\001*'
  _MODELCLASSSERVICE.methods_by_name['DeleteModelClass']._options = None
  _MODELCLASSSERVICE.methods_by_name['DeleteModelClass']._serialized_options = b'\202\323\344\223\002%*#/v1/modelclasses/{namespace}/{name}'
  _MODELCLASSSERVICE.methods_by_name['CreateModelClassProfile']._options = None
  _MODELCLASSSERVICE.methods_by_name['CreateModelClassProfile']._serialized_options = b'\202\323\344\223\002-\"+/v1/modelclasses/{namespace}/{name}/profile'
  _MODELCLASSSERVICE.methods_by_name['TrainNow']._options = None
  _MODELCLASSSERVICE.methods_by_name['TrainNow']._serialized_options = b'\202\323\344\223\002+\")/v1/modelclasses/{namespace}/{name}/train'
  _MODELCLASSSERVICE.methods_by_name['PredictNow']._options = None
  _MODELCLASSSERVICE.methods_by_name['PredictNow']._serialized_options = b'\202\323\344\223\002-\"+/v1/modelclasses/{namespace}/{name}/predict'
  _globals['_GETMODELCLASSREQUEST']._serialized_start=323
  _globals['_GETMODELCLASSREQUEST']._serialized_end=378
  _globals['_GETMODELCLASSRESPONSE']._serialized_start=380
  _globals['_GETMODELCLASSRESPONSE']._serialized_end=507
  _globals['_LISTMODELCLASSREQUEST']._serialized_start=510
  _globals['_LISTMODELCLASSREQUEST']._serialized_end=699
  _globals['_LISTMODELCLASSREQUEST_LABELSENTRY']._serialized_start=654
  _globals['_LISTMODELCLASSREQUEST_LABELSENTRY']._serialized_end=699
  _globals['_LISTMODELCLASSRESPONSE']._serialized_start=702
  _globals['_LISTMODELCLASSRESPONSE']._serialized_end=847
  _globals['_CREATEMODELCLASSREQUEST']._serialized_start=849
  _globals['_CREATEMODELCLASSREQUEST']._serialized_end=964
  _globals['_CREATEMODELCLASSRESPONSE']._serialized_start=966
  _globals['_CREATEMODELCLASSRESPONSE']._serialized_end=992
  _globals['_UPDATEMODELCLASSREQUEST']._serialized_start=995
  _globals['_UPDATEMODELCLASSREQUEST']._serialized_end=1158
  _globals['_CREATEMODELCLASSPROFILEREQUEST']._serialized_start=1161
  _globals['_CREATEMODELCLASSPROFILEREQUEST']._serialized_end=1313
  _globals['_CREATEMODELCLASSPROFILERESPONSE']._serialized_start=1315
  _globals['_CREATEMODELCLASSPROFILERESPONSE']._serialized_end=1394
  _globals['_GETMODELCLASSPROFILEREQUEST']._serialized_start=1396
  _globals['_GETMODELCLASSPROFILEREQUEST']._serialized_end=1474
  _globals['_DELETEMODELCLASSREQUEST']._serialized_start=1476
  _globals['_DELETEMODELCLASSREQUEST']._serialized_end=1534
  _globals['_DELETEMODELCLASSRESPONSE']._serialized_start=1536
  _globals['_DELETEMODELCLASSRESPONSE']._serialized_end=1562
  _globals['_UPDATEMODELCLASSRESPONSE']._serialized_start=1564
  _globals['_UPDATEMODELCLASSRESPONSE']._serialized_end=1590
  _globals['_MODELCLASSTRAINNOWREQUEST']._serialized_start=1592
  _globals['_MODELCLASSTRAINNOWREQUEST']._serialized_end=1652
  _globals['_MODELCLASSTRAINNOWRESPONSE']._serialized_start=1654
  _globals['_MODELCLASSTRAINNOWRESPONSE']._serialized_end=1682
  _globals['_MODELCLASSPREDICTNOWREQUEST']._serialized_start=1684
  _globals['_MODELCLASSPREDICTNOWREQUEST']._serialized_end=1746
  _globals['_MODELCLASSPREDICTNOWRESPONSE']._serialized_start=1748
  _globals['_MODELCLASSPREDICTNOWRESPONSE']._serialized_end=1778
  _globals['_MODELCLASSSERVICE']._serialized_start=1781
  _globals['_MODELCLASSSERVICE']._serialized_end=3563
# @@protoc_insertion_point(module_scope)
