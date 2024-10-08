# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/model/v1/model.proto
# Protobuf Python Version: 5.26.1
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
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n;github.com/metaprov/modelaapi/services/model/v1/model.proto\x12/github.com.metaprov.modelaapi.services.model.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1aHgithub.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\")\n\x1a\x43reateModelProfileResponse\x12\x0b\n\x03uri\x18\x03 \x01(\t\"<\n\x19\x43reateModelProfileRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\":\n\x17ListModelProfileRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"U\n\x16GetModelProfileRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0b\n\x03uri\x18\x03 \x01(\t\x12\r\n\x05group\x18\x04 \x01(\t\"j\n\x17GetModelProfileResponse\x12O\n\x07profile\x18\x01 \x01(\x0b\x32>.github.com.metaprov.modelaapi.services.common.v1.ModelProfile\"\xa2\x01\n\x14GetModelLogsResponse\x12]\n\x04logs\x18\x01 \x03(\x0b\x32O.github.com.metaprov.modelaapi.services.model.v1.GetModelLogsResponse.LogsEntry\x1a+\n\tLogsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"6\n\x13GetModelLogsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"d\n\x12\x43reateModelRequest\x12N\n\x05model\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\"\x15\n\x13\x43reateModelResponse\"d\n\x12UpdateModelRequest\x12N\n\x05model\x18\x05 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\"\x15\n\x13UpdateModelResponse\"p\n\x10GetModelResponse\x12N\n\x05model\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"4\n\x11\x41\x62ortModelRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x14\n\x12\x41\x62ortModelResponse\"4\n\x11PauseModelRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x14\n\x12PauseModelResponse\"5\n\x12ResumeModelRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x15\n\x13ResumeModelResponse\"8\n\x14\x43ompareModelsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\r\n\x05names\x18\x02 \x03(\t\"\x8b\x01\n\x15\x43ompareModelsResponse\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\r\n\x05names\x18\x02 \x03(\t\x12P\n\x08profiles\x18\x03 \x03(\x0b\x32>.github.com.metaprov.modelaapi.services.common.v1.ModelProfile\"X\n\x13\x43ompileModelRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0e\n\x06target\x18\x03 \x01(\t\x12\x10\n\x08\x63ompiler\x18\x04 \x01(\t\"8\n\x14\x43ompileModelResponse\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\r\n\x05names\x18\x02 \x01(\t\"\x8e\x01\n\x12\x44\x65ployModelRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x11\n\tpredictor\x18\x03 \x01(\t\x12\x10\n\x08replicas\x18\x04 \x01(\x05\x12\x0f\n\x07traffic\x18\x05 \x01(\x05\x12\x0c\n\x04role\x18\x06 \x01(\t\x12\x13\n\x0bservingsite\x18\x07 \x01(\t\"6\n\x13PublishModelRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x15\n\x13\x44\x65ployModelResponse\"\xee\x01\n\x11ListModelsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12^\n\x06labels\x18\x02 \x03(\x0b\x32N.github.com.metaprov.modelaapi.services.model.v1.ListModelsRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"i\n\x12ListModelsResponse\x12S\n\x06models\x18\x01 \x01(\x0b\x32\x43.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelList\"2\n\x0fGetModelRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x13\n\x11UpdateModelResult\"5\n\x12\x44\x65leteModelRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x15\n\x13\x44\x65leteModelResponse\",\n\x14PublishModelResponse\x12\x14\n\x0cmodelTarHash\x18\x01 \x01(\t\"5\n\x12GetMisclassRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"a\n\x13GetMisclassResponse\x12J\n\x05table\x18\x01 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\"F\n\x14\x44ownloadModelRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\r\n\x05group\x18\x03 \x01(\t\"$\n\x15\x44ownloadModelResponse\x12\x0b\n\x03raw\x18\x01 \x01(\x0c\"~\n\x13PromoteModelRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0e\n\x06tenant\x18\x03 \x01(\t\x12\x13\n\x0bservingsite\x18\x04 \x01(\t\x12\x11\n\tpredictor\x18\x05 \x01(\t\x12\x0e\n\x06shadow\x18\x06 \x01(\x08\"\x16\n\x14PromoteModelResponse\"3\n\x10TestModelRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x13\n\x11TestModelResponse\"\x98\x02\n\x13PreviewScoreRequest\x12W\n\x08snapshot\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DatasetSnapshot\x12g\n\tpipelines\x18\x02 \x03(\x0b\x32T.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.FeatureEngineeringPipeline\x12\x11\n\testimator\x18\x03 \x01(\t\x12\x0e\n\x06metric\x18\x04 \x01(\t\x12\x0c\n\x04rows\x18\x05 \x01(\x05\x12\x0e\n\x06\x63lient\x18\x06 \x01(\t\"%\n\x14PreviewScoreResponse\x12\r\n\x05score\x18\x01 \x01(\x02\x32\xb0\x1f\n\x0cModelService\x12\xb4\x01\n\nListModels\x12\x42.github.com.metaprov.modelaapi.services.model.v1.ListModelsRequest\x1a\x43.github.com.metaprov.modelaapi.services.model.v1.ListModelsResponse\"\x1d\x82\xd3\xe4\x93\x02\x17\x12\x15/v1/model/{namespace}\x12\xaf\x01\n\x0b\x43reateModel\x12\x43.github.com.metaprov.modelaapi.services.model.v1.CreateModelRequest\x1a\x44.github.com.metaprov.modelaapi.services.model.v1.CreateModelResponse\"\x15\x82\xd3\xe4\x93\x02\x0f\"\n/v1/models:\x01*\x12\xb6\x01\n\x08GetModel\x12@.github.com.metaprov.modelaapi.services.model.v1.GetModelRequest\x1a\x41.github.com.metaprov.modelaapi.services.model.v1.GetModelResponse\"%\x82\xd3\xe4\x93\x02\x1f\x12\x1d/v1/models/{namespace}/{name}\x12\xe0\x01\n\x0bUpdateModel\x12\x43.github.com.metaprov.modelaapi.services.model.v1.UpdateModelRequest\x1a\x44.github.com.metaprov.modelaapi.services.model.v1.UpdateModelResponse\"F\x82\xd3\xe4\x93\x02@\x1a;/v1/models/{model.metadata.namespace}/{model.metadata.name}:\x01*\x12\xbf\x01\n\x0b\x44\x65leteModel\x12\x43.github.com.metaprov.modelaapi.services.model.v1.DeleteModelRequest\x1a\x44.github.com.metaprov.modelaapi.services.model.v1.DeleteModelResponse\"%\x82\xd3\xe4\x93\x02\x1f*\x1d/v1/models/{namespace}/{name}\x12\xc9\x01\n\x0b\x44\x65ployModel\x12\x43.github.com.metaprov.modelaapi.services.model.v1.DeployModelRequest\x1a\x44.github.com.metaprov.modelaapi.services.model.v1.DeployModelResponse\"/\x82\xd3\xe4\x93\x02)\"$/v1/models/{namespace}/{name}:deploy:\x01*\x12\xcd\x01\n\x0cPublishModel\x12\x44.github.com.metaprov.modelaapi.services.model.v1.PublishModelRequest\x1a\x45.github.com.metaprov.modelaapi.services.model.v1.PublishModelResponse\"0\x82\xd3\xe4\x93\x02*\"%/v1/models/{namespace}/{name}:publish:\x01*\x12\xdc\x01\n\x12\x43reateModelProfile\x12J.github.com.metaprov.modelaapi.services.model.v1.CreateModelProfileRequest\x1aK.github.com.metaprov.modelaapi.services.model.v1.CreateModelProfileResponse\"-\x82\xd3\xe4\x93\x02\'\"%/v1/models/{namespace}/{name}:profile\x12\xd3\x01\n\x0fGetModelProfile\x12G.github.com.metaprov.modelaapi.services.model.v1.GetModelProfileRequest\x1aH.github.com.metaprov.modelaapi.services.model.v1.GetModelProfileResponse\"-\x82\xd3\xe4\x93\x02\'\x12%/v1/models/{namespace}/{name}:profile\x12\xcd\x01\n\x10GetModelMisclass\x12\x43.github.com.metaprov.modelaapi.services.model.v1.GetMisclassRequest\x1a\x44.github.com.metaprov.modelaapi.services.model.v1.GetMisclassResponse\".\x82\xd3\xe4\x93\x02(\x12&/v1/models/{namespace}/{name}:misclass\x12\xc7\x01\n\x0cGetModelLogs\x12\x44.github.com.metaprov.modelaapi.services.model.v1.GetModelLogsRequest\x1a\x45.github.com.metaprov.modelaapi.services.model.v1.GetModelLogsResponse\"*\x82\xd3\xe4\x93\x02$\x12\"/v1/models/{namespace}/{name}:logs\x12\xc2\x01\n\nAbortModel\x12\x42.github.com.metaprov.modelaapi.services.model.v1.AbortModelRequest\x1a\x43.github.com.metaprov.modelaapi.services.model.v1.AbortModelResponse\"+\x82\xd3\xe4\x93\x02%\"#/v1/models/{namespace}/{name}:abort\x12\xc2\x01\n\nPauseModel\x12\x42.github.com.metaprov.modelaapi.services.model.v1.PauseModelRequest\x1a\x43.github.com.metaprov.modelaapi.services.model.v1.PauseModelResponse\"+\x82\xd3\xe4\x93\x02%\"#/v1/models/{namespace}/{name}:pause\x12\xc6\x01\n\x0bResumeModel\x12\x43.github.com.metaprov.modelaapi.services.model.v1.ResumeModelRequest\x1a\x44.github.com.metaprov.modelaapi.services.model.v1.ResumeModelResponse\",\x82\xd3\xe4\x93\x02&\"$/v1/models/{namespace}/{name}:resume\x12\xce\x01\n\rCompareModels\x12\x45.github.com.metaprov.modelaapi.services.model.v1.CompareModelsRequest\x1a\x46.github.com.metaprov.modelaapi.services.model.v1.CompareModelsResponse\".\x82\xd3\xe4\x93\x02(\"&/v1/models/{namespace}/{names}:compare\x12\xca\x01\n\x0c\x43ompileModel\x12\x44.github.com.metaprov.modelaapi.services.model.v1.CompileModelRequest\x1a\x45.github.com.metaprov.modelaapi.services.model.v1.CompileModelResponse\"-\x82\xd3\xe4\x93\x02\'\"%/v1/models/{namespace}/{name}:compile\x12\xce\x01\n\rDownloadModel\x12\x45.github.com.metaprov.modelaapi.services.model.v1.DownloadModelRequest\x1a\x46.github.com.metaprov.modelaapi.services.model.v1.DownloadModelResponse\".\x82\xd3\xe4\x93\x02(\"&/v1/models/{namespace}/{name}:download\x12\xca\x01\n\x0cPromoteModel\x12\x44.github.com.metaprov.modelaapi.services.model.v1.PromoteModelRequest\x1a\x45.github.com.metaprov.modelaapi.services.model.v1.PromoteModelResponse\"-\x82\xd3\xe4\x93\x02\'\"%/v1/models/{namespace}/{name}:promote\x12\xbe\x01\n\tTestModel\x12\x41.github.com.metaprov.modelaapi.services.model.v1.TestModelRequest\x1a\x42.github.com.metaprov.modelaapi.services.model.v1.TestModelResponse\"*\x82\xd3\xe4\x93\x02$\"\"/v1/models/{namespace}/{name}:test\x12\x9d\x01\n\x0cPreviewScore\x12\x44.github.com.metaprov.modelaapi.services.model.v1.PreviewScoreRequest\x1a\x45.github.com.metaprov.modelaapi.services.model.v1.PreviewScoreResponse\"\x00\x42\x31Z/github.com/metaprov/modelaapi/services/model/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.model.v1.model_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z/github.com/metaprov/modelaapi/services/model/v1'
  _globals['_GETMODELLOGSRESPONSE_LOGSENTRY']._loaded_options = None
  _globals['_GETMODELLOGSRESPONSE_LOGSENTRY']._serialized_options = b'8\001'
  _globals['_LISTMODELSREQUEST_LABELSENTRY']._loaded_options = None
  _globals['_LISTMODELSREQUEST_LABELSENTRY']._serialized_options = b'8\001'
  _globals['_MODELSERVICE'].methods_by_name['ListModels']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['ListModels']._serialized_options = b'\202\323\344\223\002\027\022\025/v1/model/{namespace}'
  _globals['_MODELSERVICE'].methods_by_name['CreateModel']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['CreateModel']._serialized_options = b'\202\323\344\223\002\017\"\n/v1/models:\001*'
  _globals['_MODELSERVICE'].methods_by_name['GetModel']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['GetModel']._serialized_options = b'\202\323\344\223\002\037\022\035/v1/models/{namespace}/{name}'
  _globals['_MODELSERVICE'].methods_by_name['UpdateModel']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['UpdateModel']._serialized_options = b'\202\323\344\223\002@\032;/v1/models/{model.metadata.namespace}/{model.metadata.name}:\001*'
  _globals['_MODELSERVICE'].methods_by_name['DeleteModel']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['DeleteModel']._serialized_options = b'\202\323\344\223\002\037*\035/v1/models/{namespace}/{name}'
  _globals['_MODELSERVICE'].methods_by_name['DeployModel']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['DeployModel']._serialized_options = b'\202\323\344\223\002)\"$/v1/models/{namespace}/{name}:deploy:\001*'
  _globals['_MODELSERVICE'].methods_by_name['PublishModel']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['PublishModel']._serialized_options = b'\202\323\344\223\002*\"%/v1/models/{namespace}/{name}:publish:\001*'
  _globals['_MODELSERVICE'].methods_by_name['CreateModelProfile']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['CreateModelProfile']._serialized_options = b'\202\323\344\223\002\'\"%/v1/models/{namespace}/{name}:profile'
  _globals['_MODELSERVICE'].methods_by_name['GetModelProfile']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['GetModelProfile']._serialized_options = b'\202\323\344\223\002\'\022%/v1/models/{namespace}/{name}:profile'
  _globals['_MODELSERVICE'].methods_by_name['GetModelMisclass']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['GetModelMisclass']._serialized_options = b'\202\323\344\223\002(\022&/v1/models/{namespace}/{name}:misclass'
  _globals['_MODELSERVICE'].methods_by_name['GetModelLogs']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['GetModelLogs']._serialized_options = b'\202\323\344\223\002$\022\"/v1/models/{namespace}/{name}:logs'
  _globals['_MODELSERVICE'].methods_by_name['AbortModel']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['AbortModel']._serialized_options = b'\202\323\344\223\002%\"#/v1/models/{namespace}/{name}:abort'
  _globals['_MODELSERVICE'].methods_by_name['PauseModel']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['PauseModel']._serialized_options = b'\202\323\344\223\002%\"#/v1/models/{namespace}/{name}:pause'
  _globals['_MODELSERVICE'].methods_by_name['ResumeModel']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['ResumeModel']._serialized_options = b'\202\323\344\223\002&\"$/v1/models/{namespace}/{name}:resume'
  _globals['_MODELSERVICE'].methods_by_name['CompareModels']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['CompareModels']._serialized_options = b'\202\323\344\223\002(\"&/v1/models/{namespace}/{names}:compare'
  _globals['_MODELSERVICE'].methods_by_name['CompileModel']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['CompileModel']._serialized_options = b'\202\323\344\223\002\'\"%/v1/models/{namespace}/{name}:compile'
  _globals['_MODELSERVICE'].methods_by_name['DownloadModel']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['DownloadModel']._serialized_options = b'\202\323\344\223\002(\"&/v1/models/{namespace}/{name}:download'
  _globals['_MODELSERVICE'].methods_by_name['PromoteModel']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['PromoteModel']._serialized_options = b'\202\323\344\223\002\'\"%/v1/models/{namespace}/{name}:promote'
  _globals['_MODELSERVICE'].methods_by_name['TestModel']._loaded_options = None
  _globals['_MODELSERVICE'].methods_by_name['TestModel']._serialized_options = b'\202\323\344\223\002$\"\"/v1/models/{namespace}/{name}:test'
  _globals['_CREATEMODELPROFILERESPONSE']._serialized_start=383
  _globals['_CREATEMODELPROFILERESPONSE']._serialized_end=424
  _globals['_CREATEMODELPROFILEREQUEST']._serialized_start=426
  _globals['_CREATEMODELPROFILEREQUEST']._serialized_end=486
  _globals['_LISTMODELPROFILEREQUEST']._serialized_start=488
  _globals['_LISTMODELPROFILEREQUEST']._serialized_end=546
  _globals['_GETMODELPROFILEREQUEST']._serialized_start=548
  _globals['_GETMODELPROFILEREQUEST']._serialized_end=633
  _globals['_GETMODELPROFILERESPONSE']._serialized_start=635
  _globals['_GETMODELPROFILERESPONSE']._serialized_end=741
  _globals['_GETMODELLOGSRESPONSE']._serialized_start=744
  _globals['_GETMODELLOGSRESPONSE']._serialized_end=906
  _globals['_GETMODELLOGSRESPONSE_LOGSENTRY']._serialized_start=863
  _globals['_GETMODELLOGSRESPONSE_LOGSENTRY']._serialized_end=906
  _globals['_GETMODELLOGSREQUEST']._serialized_start=908
  _globals['_GETMODELLOGSREQUEST']._serialized_end=962
  _globals['_CREATEMODELREQUEST']._serialized_start=964
  _globals['_CREATEMODELREQUEST']._serialized_end=1064
  _globals['_CREATEMODELRESPONSE']._serialized_start=1066
  _globals['_CREATEMODELRESPONSE']._serialized_end=1087
  _globals['_UPDATEMODELREQUEST']._serialized_start=1089
  _globals['_UPDATEMODELREQUEST']._serialized_end=1189
  _globals['_UPDATEMODELRESPONSE']._serialized_start=1191
  _globals['_UPDATEMODELRESPONSE']._serialized_end=1212
  _globals['_GETMODELRESPONSE']._serialized_start=1214
  _globals['_GETMODELRESPONSE']._serialized_end=1326
  _globals['_ABORTMODELREQUEST']._serialized_start=1328
  _globals['_ABORTMODELREQUEST']._serialized_end=1380
  _globals['_ABORTMODELRESPONSE']._serialized_start=1382
  _globals['_ABORTMODELRESPONSE']._serialized_end=1402
  _globals['_PAUSEMODELREQUEST']._serialized_start=1404
  _globals['_PAUSEMODELREQUEST']._serialized_end=1456
  _globals['_PAUSEMODELRESPONSE']._serialized_start=1458
  _globals['_PAUSEMODELRESPONSE']._serialized_end=1478
  _globals['_RESUMEMODELREQUEST']._serialized_start=1480
  _globals['_RESUMEMODELREQUEST']._serialized_end=1533
  _globals['_RESUMEMODELRESPONSE']._serialized_start=1535
  _globals['_RESUMEMODELRESPONSE']._serialized_end=1556
  _globals['_COMPAREMODELSREQUEST']._serialized_start=1558
  _globals['_COMPAREMODELSREQUEST']._serialized_end=1614
  _globals['_COMPAREMODELSRESPONSE']._serialized_start=1617
  _globals['_COMPAREMODELSRESPONSE']._serialized_end=1756
  _globals['_COMPILEMODELREQUEST']._serialized_start=1758
  _globals['_COMPILEMODELREQUEST']._serialized_end=1846
  _globals['_COMPILEMODELRESPONSE']._serialized_start=1848
  _globals['_COMPILEMODELRESPONSE']._serialized_end=1904
  _globals['_DEPLOYMODELREQUEST']._serialized_start=1907
  _globals['_DEPLOYMODELREQUEST']._serialized_end=2049
  _globals['_PUBLISHMODELREQUEST']._serialized_start=2051
  _globals['_PUBLISHMODELREQUEST']._serialized_end=2105
  _globals['_DEPLOYMODELRESPONSE']._serialized_start=2107
  _globals['_DEPLOYMODELRESPONSE']._serialized_end=2128
  _globals['_LISTMODELSREQUEST']._serialized_start=2131
  _globals['_LISTMODELSREQUEST']._serialized_end=2369
  _globals['_LISTMODELSREQUEST_LABELSENTRY']._serialized_start=2324
  _globals['_LISTMODELSREQUEST_LABELSENTRY']._serialized_end=2369
  _globals['_LISTMODELSRESPONSE']._serialized_start=2371
  _globals['_LISTMODELSRESPONSE']._serialized_end=2476
  _globals['_GETMODELREQUEST']._serialized_start=2478
  _globals['_GETMODELREQUEST']._serialized_end=2528
  _globals['_UPDATEMODELRESULT']._serialized_start=2530
  _globals['_UPDATEMODELRESULT']._serialized_end=2549
  _globals['_DELETEMODELREQUEST']._serialized_start=2551
  _globals['_DELETEMODELREQUEST']._serialized_end=2604
  _globals['_DELETEMODELRESPONSE']._serialized_start=2606
  _globals['_DELETEMODELRESPONSE']._serialized_end=2627
  _globals['_PUBLISHMODELRESPONSE']._serialized_start=2629
  _globals['_PUBLISHMODELRESPONSE']._serialized_end=2673
  _globals['_GETMISCLASSREQUEST']._serialized_start=2675
  _globals['_GETMISCLASSREQUEST']._serialized_end=2728
  _globals['_GETMISCLASSRESPONSE']._serialized_start=2730
  _globals['_GETMISCLASSRESPONSE']._serialized_end=2827
  _globals['_DOWNLOADMODELREQUEST']._serialized_start=2829
  _globals['_DOWNLOADMODELREQUEST']._serialized_end=2899
  _globals['_DOWNLOADMODELRESPONSE']._serialized_start=2901
  _globals['_DOWNLOADMODELRESPONSE']._serialized_end=2937
  _globals['_PROMOTEMODELREQUEST']._serialized_start=2939
  _globals['_PROMOTEMODELREQUEST']._serialized_end=3065
  _globals['_PROMOTEMODELRESPONSE']._serialized_start=3067
  _globals['_PROMOTEMODELRESPONSE']._serialized_end=3089
  _globals['_TESTMODELREQUEST']._serialized_start=3091
  _globals['_TESTMODELREQUEST']._serialized_end=3142
  _globals['_TESTMODELRESPONSE']._serialized_start=3144
  _globals['_TESTMODELRESPONSE']._serialized_end=3163
  _globals['_PREVIEWSCOREREQUEST']._serialized_start=3166
  _globals['_PREVIEWSCOREREQUEST']._serialized_end=3446
  _globals['_PREVIEWSCORERESPONSE']._serialized_start=3448
  _globals['_PREVIEWSCORERESPONSE']._serialized_end=3485
  _globals['_MODELSERVICE']._serialized_start=3488
  _globals['_MODELSERVICE']._serialized_end=7504
# @@protoc_insertion_point(module_scope)
