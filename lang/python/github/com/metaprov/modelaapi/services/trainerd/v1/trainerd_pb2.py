# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/trainerd/v1/trainerd.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_catalog_dot_v1alpha1_dot_generated__pb2
from k8s.io.api.core.v1 import generated_pb2 as k8s_dot_io_dot_api_dot_core_dot_v1_dot_generated__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nAgithub.com/metaprov/modelaapi/services/trainerd/v1/trainerd.proto\x12\x32github.com.metaprov.modelaapi.services.trainerd.v1\x1aHgithub.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1aGgithub.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated.proto\x1a\"k8s.io/api/core/v1/generated.proto\"\xe6\x07\n\x0cTrainRequest\x12R\n\x07product\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct\x12Y\n\x07version\x18\x02 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\x12T\n\x06\x62ucket\x18\x03 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12N\n\x05model\x18\x05 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12N\n\x05study\x18\x06 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study\x12T\n\ndatasource\x18\x07 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12N\n\x07\x64\x61taset\x18\x08 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\x12U\n\nconnection\x18\t \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12\\\n\x06secret\x18\n \x03(\x0b\x32L.github.com.metaprov.modelaapi.services.trainerd.v1.TrainRequest.SecretEntry\x12R\n\x0btestDataset\x18\x0b \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\x12S\n\x0ctrainDataset\x18\x0c \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\x1a-\n\x0bSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\"\x84\x07\n\rTrainResponse\x12T\n\x06result\x18\x01 \x03(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement\x12\x17\n\x0fweightsCloudUri\x18\x02 \x01(\t\x12\x18\n\x10manifestCloudUri\x18\x03 \x01(\t\x12\x14\n\x0clogsCloudUri\x18\x04 \x01(\t\x12\x14\n\x0clabelEncoder\x18\x05 \x01(\t\x12\x19\n\x11pythonVersionInfo\x18\x06 \x01(\t\x12\x11\n\tpythonCMD\x18\x07 \x01(\t\x12\n\n\x02OS\x18\x08 \x01(\t\x12\x63\n\tpipFreeze\x18\t \x03(\x0b\x32P.github.com.metaprov.modelaapi.services.trainerd.v1.TrainResponse.PipFreezeEntry\x12\x83\x01\n\x19impurityFeatureImportance\x18\n \x03(\x0b\x32`.github.com.metaprov.modelaapi.services.trainerd.v1.TrainResponse.ImpurityFeatureImportanceEntry\x12\x89\x01\n\x1cpermutationFeatureImportance\x18\x0b \x03(\x0b\x32\x63.github.com.metaprov.modelaapi.services.trainerd.v1.TrainResponse.PermutationFeatureImportanceEntry\x12T\n\x02\x63m\x18\x0c \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ConfusionMatrix\x1a\x30\n\x0ePipFreezeEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x1a@\n\x1eImpurityFeatureImportanceEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\x1a\x43\n!PermutationFeatureImportanceEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\"\xc1\x06\n\x0e\x43ompileRequest\x12R\n\x07product\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct\x12Y\n\x07version\x18\x02 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\x12T\n\x06\x62ucket\x18\x03 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12N\n\x05model\x18\x05 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12N\n\x05study\x18\x06 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study\x12T\n\ndatasource\x18\x07 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12N\n\x07\x64\x61taset\x18\x08 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\x12U\n\nconnection\x18\t \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12^\n\x06secret\x18\n \x03(\x0b\x32N.github.com.metaprov.modelaapi.services.trainerd.v1.CompileRequest.SecretEntry\x1a-\n\x0bSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\"+\n\x0f\x43ompileResponse\x12\x18\n\x10\x63ompiledModelUri\x18\x01 \x01(\t\"\xbb\x06\n\x0bTestRequest\x12R\n\x07product\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct\x12Y\n\x07version\x18\x02 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\x12T\n\x06\x62ucket\x18\x03 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12N\n\x05model\x18\x05 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12N\n\x05study\x18\x06 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study\x12T\n\ndatasource\x18\x07 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12N\n\x07\x64\x61taset\x18\x08 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\x12U\n\nconnection\x18\t \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12[\n\x06secret\x18\n \x03(\x0b\x32K.github.com.metaprov.modelaapi.services.trainerd.v1.TestRequest.SecretEntry\x1a-\n\x0bSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\"\x96\n\n\x0cTestResponse\x12Z\n\x0ctrain_result\x18\x01 \x03(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement\x12Y\n\x0btest_result\x18\x02 \x03(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement\x12^\n\x10\x62\x65nchmark_result\x18\x03 \x03(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement\x12\x1c\n\x14modelWeightsCloudUri\x18\x04 \x01(\t\x12\x1d\n\x15modelManifestCloudUri\x18\x05 \x01(\t\x12\x19\n\x11modelLogsCloudUri\x18\x06 \x01(\t\x12\x1a\n\x12preWeightsCloudUri\x18\x07 \x01(\t\x12\x1b\n\x13preManifestCloudUri\x18\x08 \x01(\t\x12\x17\n\x0fpreLogsCloudUri\x18\t \x01(\t\x12\x14\n\x0clabelEncoder\x18\n \x01(\t\x12\x11\n\tpythonCMD\x18\x0b \x01(\t\x12\n\n\x02OS\x18\x0c \x01(\t\x12\x19\n\x11pythonVersionInfo\x18\r \x01(\t\x12\x62\n\tpipFreeze\x18\x0e \x03(\x0b\x32O.github.com.metaprov.modelaapi.services.trainerd.v1.TestResponse.PipFreezeEntry\x12\x13\n\x0bmisclassUri\x18\x0f \x01(\t\x12\x82\x01\n\x19impurityFeatureImportance\x18\x10 \x03(\x0b\x32_.github.com.metaprov.modelaapi.services.trainerd.v1.TestResponse.ImpurityFeatureImportanceEntry\x12\x88\x01\n\x1cpermutationFeatureImportance\x18\x11 \x03(\x0b\x32\x62.github.com.metaprov.modelaapi.services.trainerd.v1.TestResponse.PermutationFeatureImportanceEntry\x12Y\n\x07trainCM\x18\x12 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ConfusionMatrix\x12X\n\x06testCM\x18\x13 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ConfusionMatrix\x1a\x30\n\x0ePipFreezeEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x1a@\n\x1eImpurityFeatureImportanceEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\x1a\x43\n!PermutationFeatureImportanceEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\"\x9c\x07\n\x14TrainEnsembleRequest\x12R\n\x07product\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct\x12Y\n\x07version\x18\x02 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\x12T\n\x06\x62ucket\x18\x03 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12M\n\x04\x62\x61se\x18\x05 \x03(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12N\n\x05model\x18\x06 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12N\n\x05study\x18\x07 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study\x12T\n\ndatasource\x18\x08 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12N\n\x07\x64\x61taset\x18\t \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\x12U\n\nconnection\x18\n \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12\x64\n\x06secret\x18\x0b \x03(\x0b\x32T.github.com.metaprov.modelaapi.services.trainerd.v1.TrainEnsembleRequest.SecretEntry\x1a-\n\x0bSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\"\x9a\x07\n\x13TestEnsembleRequest\x12R\n\x07product\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct\x12Y\n\x07version\x18\x02 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\x12T\n\x06\x62ucket\x18\x03 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12M\n\x04\x62\x61se\x18\x05 \x03(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12N\n\x05model\x18\x06 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12N\n\x05study\x18\x07 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study\x12T\n\ndatasource\x18\x08 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12N\n\x07\x64\x61taset\x18\t \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\x12U\n\nconnection\x18\n \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12\x63\n\x06secret\x18\x0b \x03(\x0b\x32S.github.com.metaprov.modelaapi.services.trainerd.v1.TestEnsembleRequest.SecretEntry\x1a-\n\x0bSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\"\xa6\x07\n\x19TrainDriftDetectorRequest\x12R\n\x07product\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct\x12Y\n\x07version\x18\x02 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\x12T\n\x06\x62ucket\x18\x03 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12M\n\x04\x62\x61se\x18\x05 \x03(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12N\n\x05model\x18\x06 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12N\n\x05study\x18\x07 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study\x12T\n\ndatasource\x18\x08 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12N\n\x07\x64\x61taset\x18\t \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\x12U\n\nconnection\x18\n \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12i\n\x06secret\x18\x0b \x03(\x0b\x32Y.github.com.metaprov.modelaapi.services.trainerd.v1.TrainDriftDetectorRequest.SecretEntry\x1a-\n\x0bSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\"\xc3\x06\n\x0f\x46orecastRequest\x12R\n\x07product\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct\x12Y\n\x07version\x18\x02 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\x12T\n\x06\x62ucket\x18\x03 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12N\n\x05model\x18\x05 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12N\n\x05study\x18\x06 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study\x12T\n\ndatasource\x18\x07 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12N\n\x07\x64\x61taset\x18\x08 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\x12U\n\nconnection\x18\t \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12_\n\x06secret\x18\n \x03(\x0b\x32O.github.com.metaprov.modelaapi.services.trainerd.v1.ForecastRequest.SecretEntry\x1a-\n\x0bSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\",\n\x10\x46orecastResponse\x12\x18\n\x10\x66orecastCloudUri\x18\x02 \x01(\t\"\x11\n\x0fShutdownRequest\"\x12\n\x10ShutdownResponse\"\xc1\x06\n\x0e\x45xplainRequest\x12R\n\x07product\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct\x12Y\n\x07version\x18\x02 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProductVersion\x12T\n\x06\x62ucket\x18\x03 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.VirtualBucket\x12N\n\x05model\x18\x05 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Model\x12N\n\x05study\x18\x06 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.Study\x12T\n\ndatasource\x18\x07 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataSource\x12N\n\x07\x64\x61taset\x18\x08 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset\x12U\n\nconnection\x18\t \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection\x12^\n\x06secret\x18\n \x03(\x0b\x32N.github.com.metaprov.modelaapi.services.trainerd.v1.ExplainRequest.SecretEntry\x1a-\n\x0bSecretEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\"\x9e\x02\n\x0f\x45xplainResponse\x12\x14\n\x0c\x65xplainerUri\x18\x01 \x01(\t\x12\x1a\n\x12trainShapValuesUri\x18\x02 \x01(\t\x12\x19\n\x11testShapValuesUri\x18\x03 \x01(\t\x12\x7f\n\x16shapFeaturesImportance\x18\x04 \x03(\x0b\x32_.github.com.metaprov.modelaapi.services.trainerd.v1.ExplainResponse.ShapFeaturesImportanceEntry\x1a=\n\x1bShapFeaturesImportanceEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\x32\xe5\t\n\x0fTrainerdService\x12\x8e\x01\n\x05Train\x12@.github.com.metaprov.modelaapi.services.trainerd.v1.TrainRequest\x1a\x41.github.com.metaprov.modelaapi.services.trainerd.v1.TrainResponse\"\x00\x12\x94\x01\n\x07\x45xplain\x12\x42.github.com.metaprov.modelaapi.services.trainerd.v1.ExplainRequest\x1a\x43.github.com.metaprov.modelaapi.services.trainerd.v1.ExplainResponse\"\x00\x12\x97\x01\n\x08\x46orecast\x12\x43.github.com.metaprov.modelaapi.services.trainerd.v1.ForecastRequest\x1a\x44.github.com.metaprov.modelaapi.services.trainerd.v1.ForecastResponse\"\x00\x12\x8b\x01\n\x04Test\x12?.github.com.metaprov.modelaapi.services.trainerd.v1.TestRequest\x1a@.github.com.metaprov.modelaapi.services.trainerd.v1.TestResponse\"\x00\x12\x9e\x01\n\rTrainEnsemble\x12H.github.com.metaprov.modelaapi.services.trainerd.v1.TrainEnsembleRequest\x1a\x41.github.com.metaprov.modelaapi.services.trainerd.v1.TrainResponse\"\x00\x12\xa8\x01\n\x12TrainDriftDetector\x12M.github.com.metaprov.modelaapi.services.trainerd.v1.TrainDriftDetectorRequest\x1a\x41.github.com.metaprov.modelaapi.services.trainerd.v1.TrainResponse\"\x00\x12\x9b\x01\n\x0cTestEnsemble\x12G.github.com.metaprov.modelaapi.services.trainerd.v1.TestEnsembleRequest\x1a@.github.com.metaprov.modelaapi.services.trainerd.v1.TestResponse\"\x00\x12\x97\x01\n\x08Shutdown\x12\x43.github.com.metaprov.modelaapi.services.trainerd.v1.ShutdownRequest\x1a\x44.github.com.metaprov.modelaapi.services.trainerd.v1.ShutdownResponse\"\x00\x42\x34Z2github.com/metaprov/modelaapi/services/trainerd/v1b\x06proto3')



_TRAINREQUEST = DESCRIPTOR.message_types_by_name['TrainRequest']
_TRAINREQUEST_SECRETENTRY = _TRAINREQUEST.nested_types_by_name['SecretEntry']
_TRAINRESPONSE = DESCRIPTOR.message_types_by_name['TrainResponse']
_TRAINRESPONSE_PIPFREEZEENTRY = _TRAINRESPONSE.nested_types_by_name['PipFreezeEntry']
_TRAINRESPONSE_IMPURITYFEATUREIMPORTANCEENTRY = _TRAINRESPONSE.nested_types_by_name['ImpurityFeatureImportanceEntry']
_TRAINRESPONSE_PERMUTATIONFEATUREIMPORTANCEENTRY = _TRAINRESPONSE.nested_types_by_name['PermutationFeatureImportanceEntry']
_COMPILEREQUEST = DESCRIPTOR.message_types_by_name['CompileRequest']
_COMPILEREQUEST_SECRETENTRY = _COMPILEREQUEST.nested_types_by_name['SecretEntry']
_COMPILERESPONSE = DESCRIPTOR.message_types_by_name['CompileResponse']
_TESTREQUEST = DESCRIPTOR.message_types_by_name['TestRequest']
_TESTREQUEST_SECRETENTRY = _TESTREQUEST.nested_types_by_name['SecretEntry']
_TESTRESPONSE = DESCRIPTOR.message_types_by_name['TestResponse']
_TESTRESPONSE_PIPFREEZEENTRY = _TESTRESPONSE.nested_types_by_name['PipFreezeEntry']
_TESTRESPONSE_IMPURITYFEATUREIMPORTANCEENTRY = _TESTRESPONSE.nested_types_by_name['ImpurityFeatureImportanceEntry']
_TESTRESPONSE_PERMUTATIONFEATUREIMPORTANCEENTRY = _TESTRESPONSE.nested_types_by_name['PermutationFeatureImportanceEntry']
_TRAINENSEMBLEREQUEST = DESCRIPTOR.message_types_by_name['TrainEnsembleRequest']
_TRAINENSEMBLEREQUEST_SECRETENTRY = _TRAINENSEMBLEREQUEST.nested_types_by_name['SecretEntry']
_TESTENSEMBLEREQUEST = DESCRIPTOR.message_types_by_name['TestEnsembleRequest']
_TESTENSEMBLEREQUEST_SECRETENTRY = _TESTENSEMBLEREQUEST.nested_types_by_name['SecretEntry']
_TRAINDRIFTDETECTORREQUEST = DESCRIPTOR.message_types_by_name['TrainDriftDetectorRequest']
_TRAINDRIFTDETECTORREQUEST_SECRETENTRY = _TRAINDRIFTDETECTORREQUEST.nested_types_by_name['SecretEntry']
_FORECASTREQUEST = DESCRIPTOR.message_types_by_name['ForecastRequest']
_FORECASTREQUEST_SECRETENTRY = _FORECASTREQUEST.nested_types_by_name['SecretEntry']
_FORECASTRESPONSE = DESCRIPTOR.message_types_by_name['ForecastResponse']
_SHUTDOWNREQUEST = DESCRIPTOR.message_types_by_name['ShutdownRequest']
_SHUTDOWNRESPONSE = DESCRIPTOR.message_types_by_name['ShutdownResponse']
_EXPLAINREQUEST = DESCRIPTOR.message_types_by_name['ExplainRequest']
_EXPLAINREQUEST_SECRETENTRY = _EXPLAINREQUEST.nested_types_by_name['SecretEntry']
_EXPLAINRESPONSE = DESCRIPTOR.message_types_by_name['ExplainResponse']
_EXPLAINRESPONSE_SHAPFEATURESIMPORTANCEENTRY = _EXPLAINRESPONSE.nested_types_by_name['ShapFeaturesImportanceEntry']
TrainRequest = _reflection.GeneratedProtocolMessageType('TrainRequest', (_message.Message,), {

  'SecretEntry' : _reflection.GeneratedProtocolMessageType('SecretEntry', (_message.Message,), {
    'DESCRIPTOR' : _TRAINREQUEST_SECRETENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TrainRequest.SecretEntry)
    })
  ,
  'DESCRIPTOR' : _TRAINREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TrainRequest)
  })
_sym_db.RegisterMessage(TrainRequest)
_sym_db.RegisterMessage(TrainRequest.SecretEntry)

TrainResponse = _reflection.GeneratedProtocolMessageType('TrainResponse', (_message.Message,), {

  'PipFreezeEntry' : _reflection.GeneratedProtocolMessageType('PipFreezeEntry', (_message.Message,), {
    'DESCRIPTOR' : _TRAINRESPONSE_PIPFREEZEENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TrainResponse.PipFreezeEntry)
    })
  ,

  'ImpurityFeatureImportanceEntry' : _reflection.GeneratedProtocolMessageType('ImpurityFeatureImportanceEntry', (_message.Message,), {
    'DESCRIPTOR' : _TRAINRESPONSE_IMPURITYFEATUREIMPORTANCEENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TrainResponse.ImpurityFeatureImportanceEntry)
    })
  ,

  'PermutationFeatureImportanceEntry' : _reflection.GeneratedProtocolMessageType('PermutationFeatureImportanceEntry', (_message.Message,), {
    'DESCRIPTOR' : _TRAINRESPONSE_PERMUTATIONFEATUREIMPORTANCEENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TrainResponse.PermutationFeatureImportanceEntry)
    })
  ,
  'DESCRIPTOR' : _TRAINRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TrainResponse)
  })
_sym_db.RegisterMessage(TrainResponse)
_sym_db.RegisterMessage(TrainResponse.PipFreezeEntry)
_sym_db.RegisterMessage(TrainResponse.ImpurityFeatureImportanceEntry)
_sym_db.RegisterMessage(TrainResponse.PermutationFeatureImportanceEntry)

CompileRequest = _reflection.GeneratedProtocolMessageType('CompileRequest', (_message.Message,), {

  'SecretEntry' : _reflection.GeneratedProtocolMessageType('SecretEntry', (_message.Message,), {
    'DESCRIPTOR' : _COMPILEREQUEST_SECRETENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.CompileRequest.SecretEntry)
    })
  ,
  'DESCRIPTOR' : _COMPILEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.CompileRequest)
  })
_sym_db.RegisterMessage(CompileRequest)
_sym_db.RegisterMessage(CompileRequest.SecretEntry)

CompileResponse = _reflection.GeneratedProtocolMessageType('CompileResponse', (_message.Message,), {
  'DESCRIPTOR' : _COMPILERESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.CompileResponse)
  })
_sym_db.RegisterMessage(CompileResponse)

TestRequest = _reflection.GeneratedProtocolMessageType('TestRequest', (_message.Message,), {

  'SecretEntry' : _reflection.GeneratedProtocolMessageType('SecretEntry', (_message.Message,), {
    'DESCRIPTOR' : _TESTREQUEST_SECRETENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TestRequest.SecretEntry)
    })
  ,
  'DESCRIPTOR' : _TESTREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TestRequest)
  })
_sym_db.RegisterMessage(TestRequest)
_sym_db.RegisterMessage(TestRequest.SecretEntry)

TestResponse = _reflection.GeneratedProtocolMessageType('TestResponse', (_message.Message,), {

  'PipFreezeEntry' : _reflection.GeneratedProtocolMessageType('PipFreezeEntry', (_message.Message,), {
    'DESCRIPTOR' : _TESTRESPONSE_PIPFREEZEENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TestResponse.PipFreezeEntry)
    })
  ,

  'ImpurityFeatureImportanceEntry' : _reflection.GeneratedProtocolMessageType('ImpurityFeatureImportanceEntry', (_message.Message,), {
    'DESCRIPTOR' : _TESTRESPONSE_IMPURITYFEATUREIMPORTANCEENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TestResponse.ImpurityFeatureImportanceEntry)
    })
  ,

  'PermutationFeatureImportanceEntry' : _reflection.GeneratedProtocolMessageType('PermutationFeatureImportanceEntry', (_message.Message,), {
    'DESCRIPTOR' : _TESTRESPONSE_PERMUTATIONFEATUREIMPORTANCEENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TestResponse.PermutationFeatureImportanceEntry)
    })
  ,
  'DESCRIPTOR' : _TESTRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TestResponse)
  })
_sym_db.RegisterMessage(TestResponse)
_sym_db.RegisterMessage(TestResponse.PipFreezeEntry)
_sym_db.RegisterMessage(TestResponse.ImpurityFeatureImportanceEntry)
_sym_db.RegisterMessage(TestResponse.PermutationFeatureImportanceEntry)

TrainEnsembleRequest = _reflection.GeneratedProtocolMessageType('TrainEnsembleRequest', (_message.Message,), {

  'SecretEntry' : _reflection.GeneratedProtocolMessageType('SecretEntry', (_message.Message,), {
    'DESCRIPTOR' : _TRAINENSEMBLEREQUEST_SECRETENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TrainEnsembleRequest.SecretEntry)
    })
  ,
  'DESCRIPTOR' : _TRAINENSEMBLEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TrainEnsembleRequest)
  })
_sym_db.RegisterMessage(TrainEnsembleRequest)
_sym_db.RegisterMessage(TrainEnsembleRequest.SecretEntry)

TestEnsembleRequest = _reflection.GeneratedProtocolMessageType('TestEnsembleRequest', (_message.Message,), {

  'SecretEntry' : _reflection.GeneratedProtocolMessageType('SecretEntry', (_message.Message,), {
    'DESCRIPTOR' : _TESTENSEMBLEREQUEST_SECRETENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TestEnsembleRequest.SecretEntry)
    })
  ,
  'DESCRIPTOR' : _TESTENSEMBLEREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TestEnsembleRequest)
  })
_sym_db.RegisterMessage(TestEnsembleRequest)
_sym_db.RegisterMessage(TestEnsembleRequest.SecretEntry)

TrainDriftDetectorRequest = _reflection.GeneratedProtocolMessageType('TrainDriftDetectorRequest', (_message.Message,), {

  'SecretEntry' : _reflection.GeneratedProtocolMessageType('SecretEntry', (_message.Message,), {
    'DESCRIPTOR' : _TRAINDRIFTDETECTORREQUEST_SECRETENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TrainDriftDetectorRequest.SecretEntry)
    })
  ,
  'DESCRIPTOR' : _TRAINDRIFTDETECTORREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.TrainDriftDetectorRequest)
  })
_sym_db.RegisterMessage(TrainDriftDetectorRequest)
_sym_db.RegisterMessage(TrainDriftDetectorRequest.SecretEntry)

ForecastRequest = _reflection.GeneratedProtocolMessageType('ForecastRequest', (_message.Message,), {

  'SecretEntry' : _reflection.GeneratedProtocolMessageType('SecretEntry', (_message.Message,), {
    'DESCRIPTOR' : _FORECASTREQUEST_SECRETENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.ForecastRequest.SecretEntry)
    })
  ,
  'DESCRIPTOR' : _FORECASTREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.ForecastRequest)
  })
_sym_db.RegisterMessage(ForecastRequest)
_sym_db.RegisterMessage(ForecastRequest.SecretEntry)

ForecastResponse = _reflection.GeneratedProtocolMessageType('ForecastResponse', (_message.Message,), {
  'DESCRIPTOR' : _FORECASTRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.ForecastResponse)
  })
_sym_db.RegisterMessage(ForecastResponse)

ShutdownRequest = _reflection.GeneratedProtocolMessageType('ShutdownRequest', (_message.Message,), {
  'DESCRIPTOR' : _SHUTDOWNREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.ShutdownRequest)
  })
_sym_db.RegisterMessage(ShutdownRequest)

ShutdownResponse = _reflection.GeneratedProtocolMessageType('ShutdownResponse', (_message.Message,), {
  'DESCRIPTOR' : _SHUTDOWNRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.ShutdownResponse)
  })
_sym_db.RegisterMessage(ShutdownResponse)

ExplainRequest = _reflection.GeneratedProtocolMessageType('ExplainRequest', (_message.Message,), {

  'SecretEntry' : _reflection.GeneratedProtocolMessageType('SecretEntry', (_message.Message,), {
    'DESCRIPTOR' : _EXPLAINREQUEST_SECRETENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.ExplainRequest.SecretEntry)
    })
  ,
  'DESCRIPTOR' : _EXPLAINREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.ExplainRequest)
  })
_sym_db.RegisterMessage(ExplainRequest)
_sym_db.RegisterMessage(ExplainRequest.SecretEntry)

ExplainResponse = _reflection.GeneratedProtocolMessageType('ExplainResponse', (_message.Message,), {

  'ShapFeaturesImportanceEntry' : _reflection.GeneratedProtocolMessageType('ShapFeaturesImportanceEntry', (_message.Message,), {
    'DESCRIPTOR' : _EXPLAINRESPONSE_SHAPFEATURESIMPORTANCEENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.ExplainResponse.ShapFeaturesImportanceEntry)
    })
  ,
  'DESCRIPTOR' : _EXPLAINRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.trainerd.v1.trainerd_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.trainerd.v1.ExplainResponse)
  })
_sym_db.RegisterMessage(ExplainResponse)
_sym_db.RegisterMessage(ExplainResponse.ShapFeaturesImportanceEntry)

_TRAINERDSERVICE = DESCRIPTOR.services_by_name['TrainerdService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z2github.com/metaprov/modelaapi/services/trainerd/v1'
  _TRAINREQUEST_SECRETENTRY._options = None
  _TRAINREQUEST_SECRETENTRY._serialized_options = b'8\001'
  _TRAINRESPONSE_PIPFREEZEENTRY._options = None
  _TRAINRESPONSE_PIPFREEZEENTRY._serialized_options = b'8\001'
  _TRAINRESPONSE_IMPURITYFEATUREIMPORTANCEENTRY._options = None
  _TRAINRESPONSE_IMPURITYFEATUREIMPORTANCEENTRY._serialized_options = b'8\001'
  _TRAINRESPONSE_PERMUTATIONFEATUREIMPORTANCEENTRY._options = None
  _TRAINRESPONSE_PERMUTATIONFEATUREIMPORTANCEENTRY._serialized_options = b'8\001'
  _COMPILEREQUEST_SECRETENTRY._options = None
  _COMPILEREQUEST_SECRETENTRY._serialized_options = b'8\001'
  _TESTREQUEST_SECRETENTRY._options = None
  _TESTREQUEST_SECRETENTRY._serialized_options = b'8\001'
  _TESTRESPONSE_PIPFREEZEENTRY._options = None
  _TESTRESPONSE_PIPFREEZEENTRY._serialized_options = b'8\001'
  _TESTRESPONSE_IMPURITYFEATUREIMPORTANCEENTRY._options = None
  _TESTRESPONSE_IMPURITYFEATUREIMPORTANCEENTRY._serialized_options = b'8\001'
  _TESTRESPONSE_PERMUTATIONFEATUREIMPORTANCEENTRY._options = None
  _TESTRESPONSE_PERMUTATIONFEATUREIMPORTANCEENTRY._serialized_options = b'8\001'
  _TRAINENSEMBLEREQUEST_SECRETENTRY._options = None
  _TRAINENSEMBLEREQUEST_SECRETENTRY._serialized_options = b'8\001'
  _TESTENSEMBLEREQUEST_SECRETENTRY._options = None
  _TESTENSEMBLEREQUEST_SECRETENTRY._serialized_options = b'8\001'
  _TRAINDRIFTDETECTORREQUEST_SECRETENTRY._options = None
  _TRAINDRIFTDETECTORREQUEST_SECRETENTRY._serialized_options = b'8\001'
  _FORECASTREQUEST_SECRETENTRY._options = None
  _FORECASTREQUEST_SECRETENTRY._serialized_options = b'8\001'
  _EXPLAINREQUEST_SECRETENTRY._options = None
  _EXPLAINREQUEST_SECRETENTRY._serialized_options = b'8\001'
  _EXPLAINRESPONSE_SHAPFEATURESIMPORTANCEENTRY._options = None
  _EXPLAINRESPONSE_SHAPFEATURESIMPORTANCEENTRY._serialized_options = b'8\001'
  _TRAINREQUEST._serialized_start=446
  _TRAINREQUEST._serialized_end=1444
  _TRAINREQUEST_SECRETENTRY._serialized_start=1399
  _TRAINREQUEST_SECRETENTRY._serialized_end=1444
  _TRAINRESPONSE._serialized_start=1447
  _TRAINRESPONSE._serialized_end=2347
  _TRAINRESPONSE_PIPFREEZEENTRY._serialized_start=2164
  _TRAINRESPONSE_PIPFREEZEENTRY._serialized_end=2212
  _TRAINRESPONSE_IMPURITYFEATUREIMPORTANCEENTRY._serialized_start=2214
  _TRAINRESPONSE_IMPURITYFEATUREIMPORTANCEENTRY._serialized_end=2278
  _TRAINRESPONSE_PERMUTATIONFEATUREIMPORTANCEENTRY._serialized_start=2280
  _TRAINRESPONSE_PERMUTATIONFEATUREIMPORTANCEENTRY._serialized_end=2347
  _COMPILEREQUEST._serialized_start=2350
  _COMPILEREQUEST._serialized_end=3183
  _COMPILEREQUEST_SECRETENTRY._serialized_start=1399
  _COMPILEREQUEST_SECRETENTRY._serialized_end=1444
  _COMPILERESPONSE._serialized_start=3185
  _COMPILERESPONSE._serialized_end=3228
  _TESTREQUEST._serialized_start=3231
  _TESTREQUEST._serialized_end=4058
  _TESTREQUEST_SECRETENTRY._serialized_start=1399
  _TESTREQUEST_SECRETENTRY._serialized_end=1444
  _TESTRESPONSE._serialized_start=4061
  _TESTRESPONSE._serialized_end=5363
  _TESTRESPONSE_PIPFREEZEENTRY._serialized_start=2164
  _TESTRESPONSE_PIPFREEZEENTRY._serialized_end=2212
  _TESTRESPONSE_IMPURITYFEATUREIMPORTANCEENTRY._serialized_start=2214
  _TESTRESPONSE_IMPURITYFEATUREIMPORTANCEENTRY._serialized_end=2278
  _TESTRESPONSE_PERMUTATIONFEATUREIMPORTANCEENTRY._serialized_start=2280
  _TESTRESPONSE_PERMUTATIONFEATUREIMPORTANCEENTRY._serialized_end=2347
  _TRAINENSEMBLEREQUEST._serialized_start=5366
  _TRAINENSEMBLEREQUEST._serialized_end=6290
  _TRAINENSEMBLEREQUEST_SECRETENTRY._serialized_start=1399
  _TRAINENSEMBLEREQUEST_SECRETENTRY._serialized_end=1444
  _TESTENSEMBLEREQUEST._serialized_start=6293
  _TESTENSEMBLEREQUEST._serialized_end=7215
  _TESTENSEMBLEREQUEST_SECRETENTRY._serialized_start=1399
  _TESTENSEMBLEREQUEST_SECRETENTRY._serialized_end=1444
  _TRAINDRIFTDETECTORREQUEST._serialized_start=7218
  _TRAINDRIFTDETECTORREQUEST._serialized_end=8152
  _TRAINDRIFTDETECTORREQUEST_SECRETENTRY._serialized_start=1399
  _TRAINDRIFTDETECTORREQUEST_SECRETENTRY._serialized_end=1444
  _FORECASTREQUEST._serialized_start=8155
  _FORECASTREQUEST._serialized_end=8990
  _FORECASTREQUEST_SECRETENTRY._serialized_start=1399
  _FORECASTREQUEST_SECRETENTRY._serialized_end=1444
  _FORECASTRESPONSE._serialized_start=8992
  _FORECASTRESPONSE._serialized_end=9036
  _SHUTDOWNREQUEST._serialized_start=9038
  _SHUTDOWNREQUEST._serialized_end=9055
  _SHUTDOWNRESPONSE._serialized_start=9057
  _SHUTDOWNRESPONSE._serialized_end=9075
  _EXPLAINREQUEST._serialized_start=9078
  _EXPLAINREQUEST._serialized_end=9911
  _EXPLAINREQUEST_SECRETENTRY._serialized_start=1399
  _EXPLAINREQUEST_SECRETENTRY._serialized_end=1444
  _EXPLAINRESPONSE._serialized_start=9914
  _EXPLAINRESPONSE._serialized_end=10200
  _EXPLAINRESPONSE_SHAPFEATURESIMPORTANCEENTRY._serialized_start=10139
  _EXPLAINRESPONSE_SHAPFEATURESIMPORTANCEENTRY._serialized_end=10200
  _TRAINERDSERVICE._serialized_start=10203
  _TRAINERDSERVICE._serialized_end=11456
# @@protoc_insertion_point(module_scope)
