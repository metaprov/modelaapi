# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_catalog_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2
from k8s.io.api.core.v1 import generated_pb2 as k8s_dot_io_dot_api_dot_core_dot_v1_dot_generated__pb2
from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2
from k8s.io.apimachinery.pkg.runtime import generated_pb2 as k8s_dot_io_dot_apimachinery_dot_pkg_dot_runtime_dot_generated__pb2
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as k8s_dot_io_dot_apimachinery_dot_pkg_dot_runtime_dot_schema_dot_generated__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nIgithub.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1/generated.proto\x12\x39github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1\x1aGgithub.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\x1aHgithub.com/metaprov/modelaapi/pkg/apis/training/v1alpha1/generated.proto\x1a\"k8s.io/api/core/v1/generated.proto\x1a\x34k8s.io/apimachinery/pkg/apis/meta/v1/generated.proto\x1a/k8s.io/apimachinery/pkg/runtime/generated.proto\x1a\x36k8s.io/apimachinery/pkg/runtime/schema/generated.proto\"\x82\x01\n\x0f\x41utoScalingSpec\x12\x0f\n\x07\x65nabled\x18\x01 \x01(\x08\x12\x13\n\x0bminReplicas\x18\x02 \x01(\x05\x12\x13\n\x0bmaxReplicas\x18\x03 \x01(\x05\x12\x19\n\x11\x63puAvgUtilization\x18\x04 \x01(\x05\x12\x19\n\x11memAvgUtilization\x18\x05 \x01(\x05\"\x8e\x01\n\x13\x42\x61\x63kwardCurtainSpec\x12\x0f\n\x07\x65nabled\x18\x01 \x01(\x08\x12\x37\n\naccountRef\x18\x02 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x15\n\rconfidenceLow\x18\x04 \x01(\x01\x12\x16\n\x0e\x63onfidenceHigh\x18\x05 \x01(\x01\"\xca\x01\n\x13\x42\x61tchPredictionSpec\x12V\n\x08schedule\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule\x12[\n\x08template\x18\x02 \x01(\x0b\x32I.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec\"|\n\rCustomAppSpec\x12\r\n\x05owner\x18\x01 \x01(\x08\x12\r\n\x05title\x18\x02 \x01(\t\x12M\n\x05pages\x18\x03 \x03(\x0b\x32>.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.PageSpec\"\xfd\x01\n\x07\x44\x61taApp\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12T\n\x04spec\x18\x02 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppSpec\x12X\n\x06status\x18\x03 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataAppStatus\"\xa2\x01\n\x0b\x44\x61taAppList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12Q\n\x05items\x18\x02 \x03(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DataApp\"\x82\x04\n\x0b\x44\x61taAppSpec\x12\r\n\x05owner\x18\x01 \x01(\t\x12\x13\n\x0bversionName\x18\x02 \x01(\t\x12\x16\n\x0emodelClassName\x18\x03 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x04 \x01(\t\x12\x11\n\tmodelName\x18\x05 \x01(\t\x12S\n\x06\x61\x63\x63\x65ss\x18\x06 \x01(\x0b\x32\x43.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AccessSpec\x12\x10\n\x08replicas\x18\x07 \x01(\x05\x12X\n\tresources\x18\n \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec\x12\x37\n\nproductRef\x18\x0c \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12;\n\x0eservingsiteRef\x18\r \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12X\n\x06\x63ustom\x18\x0e \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.CustomAppSpec\"\xd8\x02\n\rDataAppStatus\x12\x1a\n\x12observedGeneration\x18\x01 \x01(\x03\x12=\n\tupdatedAt\x18\x02 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12=\n\x10\x64\x65ploymentStatus\x18\x03 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x39\n\x0eservicetStatus\x18\x04 \x01(\x0b\x32!.k8s.io.api.core.v1.ServiceStatus\x12\x15\n\rfailureReason\x18\x05 \x01(\t\x12\x16\n\x0e\x66\x61ilureMessage\x18\x06 \x01(\t\x12\x43\n\nconditions\x18\x07 \x03(\x0b\x32/.k8s.io.apimachinery.pkg.apis.meta.v1.Condition\"\xf0\x03\n\x12\x44riftDetectionSpec\x12\x0f\n\x07\x65nabled\x18\x01 \x01(\x08\x12\x15\n\rgenDriftTests\x18\x02 \x01(\x08\x12\x16\n\x0eminPredictions\x18\x03 \x01(\x05\x12\x0f\n\x07\x63olumns\x18\x04 \x03(\t\x12]\n\x0f\x64riftThresholds\x18\x05 \x03(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DriftThreshold\x12]\n\x11unitTestsTemplate\x18\x06 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite\x12V\n\x08schedule\x18\x07 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule\x12\x45\n\x18outlierDetectionModelRef\x18\x08 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x15\n\rmaxHistograms\x18\t \x01(\x05\x12\x15\n\rperiodSeconds\x18\n \x01(\x05\"\x16\n\x14\x44riftDetectionStatus\"\xc5\x01\n\x11\x46\x61stSlowModelSpec\x12\x0f\n\x07\x65nabled\x18\x01 \x01(\x08\x12\x39\n\x0c\x66\x61stModelRef\x18\x02 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x39\n\x0cslowModelRef\x18\x03 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x13\n\x0bprobaLowPct\x18\x04 \x01(\x05\x12\x14\n\x0cprobaHighPct\x18\x05 \x01(\x05\"\xce\x01\n\x10\x46\x65\x65\x64\x62\x61\x63kTestSpec\x12\x0f\n\x07\x65nabled\x18\x01 \x01(\x08\x12Q\n\x05tests\x18\x02 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite\x12V\n\x08schedule\x18\x03 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunSchedule\"\xa8\x02\n\x16\x46orecastPredictionSpec\x12\x7f\n\x0fhierarchyValues\x18\x01 \x03(\x0b\x32\x66.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec.HierarchyValuesEntry\x12U\n\x07horizon\x18\x02 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.WindowSpec\x1a\x36\n\x14HierarchyValuesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x83\x01\n\x0b\x46orecastRun\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x10\n\x08modelURI\x18\x02 \x01(\t\x12U\n\x07horizon\x18\x03 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.WindowSpec\"\xe4\x01\n\x0c\x46orecastSpec\x12_\n\x04runs\x18\t \x03(\x0b\x32Q.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastSpec.RunsEntry\x1as\n\tRunsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12U\n\x05value\x18\x02 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastRun:\x02\x38\x01\"\xd1\x01\n\x0e\x46orecastStatus\x12\x12\n\nprofileURI\x18\x01 \x01(\t\x12\x11\n\treportURI\x18\x02 \x01(\t\x12\x13\n\x0b\x66orecastURI\x18\x03 \x01(\t\x12\x0e\n\x06\x66\x61iled\x18\x04 \x01(\x08\x12\x12\n\nfailureMsg\x18\x05 \x01(\t\x12_\n\rworkerResults\x18\x06 \x03(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkerRunResult\"o\n\x12\x46orwardCurtainSpec\x12\x0f\n\x07\x65nabled\x18\x01 \x01(\x08\x12\x37\n\naccountRef\x18\x02 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x0f\n\x07percent\x18\x03 \x01(\x05\"Z\n\x16KubernetesObjectStatus\x12\x30\n\x03ref\x18\x01 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x0e\n\x06status\x18\x02 \x01(\t\"0\n\rMetricHistory\x12\x0e\n\x06metric\x18\x01 \x01(\t\x12\x0f\n\x07history\x18\x02 \x03(\x01\"\xab\n\n\x15ModelDeploymentStatus\x12\x11\n\tmodelName\x18\x01 \x01(\t\x12\x14\n\x0cmodelVersion\x18\x02 \x01(\t\x12\x11\n\timageName\x18\x03 \x01(\t\x12:\n\rdeploymentRef\x18\x04 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x37\n\nserviceRef\x18\x05 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x33\n\x06hpaRef\x18\x06 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x0b\n\x03p50\x18\x07 \x01(\x01\x12\x0b\n\x03p95\x18\x08 \x01(\x01\x12\x0b\n\x03p99\x18\t \x01(\x01\x12\x46\n\x12lastPredictionTime\x18\n \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12\x1a\n\x12\x64\x61ilyPredictionAvg\x18\x0b \x01(\x05\x12\x13\n\x0blastFailure\x18\x0c \x01(\t\x12\r\n\x05phase\x18\r \x01(\t\x12>\n\ndeployedAt\x18\x0e \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12>\n\nreleasedAt\x18\x0f \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12\x11\n\tdataDrift\x18\x10 \x01(\x08\x12\x14\n\x0c\x63onceptDrift\x18\x11 \x01(\x08\x12\x1c\n\x14lastDailyPredictions\x18\x12 \x03(\x05\x12i\n\x0eobjectStatuses\x18\x13 \x03(\x0b\x32Q.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus\x12Z\n\x06\x65rrors\x18\x14 \x03(\x0b\x32J.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ValidationError\x12\x43\n\x16lastFeedbackDatasetRef\x18\x15 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x44\n\x10lastFeedbackTest\x18\x16 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12\x65\n\x17lastFeedbackTestResults\x18\x17 \x03(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement\x12|\n\x0emetricsHistory\x18\x18 \x03(\x0b\x32\x64.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus.MetricsHistoryEntry\x1a\x7f\n\x13MetricsHistoryEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12W\n\x05value\x18\x02 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.MetricHistory:\x02\x38\x01\"\xe1\x01\n\x0bModelRecord\x12\x11\n\tmodelName\x18\x01 \x01(\t\x12\x14\n\x0cmodelVersion\x18\x02 \x01(\t\x12:\n\x06liveAt\x18\x03 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12=\n\tretiredAt\x18\x04 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12\x1a\n\x12\x61vgDailyPrediction\x18\x05 \x01(\x05\x12\x12\n\navgLatency\x18\x06 \x01(\x01\"\x80\x01\n\x10ModelServingSpec\x12\x12\n\nserverless\x18\x02 \x01(\x08\x12X\n\x0cservingTests\x18\x04 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuite\";\n\x16OnlineFeatureStoreSpec\x12\x0f\n\x07\x65nabled\x18\x01 \x01(\x08\x12\x10\n\x08hostname\x18\x02 \x01(\t\"U\n\x11OnlineStoreStatus\x12@\n\x0clastAccessed\x18\x01 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\"=\n PartitionPredictionLocationsSpec\x12\x19\n\x11groupForecastFile\x18\x02 \x01(\t\"\x86\x02\n\nPrediction\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12W\n\x04spec\x18\x02 \x01(\x0b\x32I.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionSpec\x12[\n\x06status\x18\x03 \x01(\x0b\x32K.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionStatus\"\x83\x01\n\x13PredictionCacheSpec\x12\x0f\n\x07\x65nabled\x18\x01 \x01(\x08\x12\x10\n\x08inMemory\x18\x02 \x01(\x08\x12\r\n\x05redis\x18\x03 \x01(\x08\x12:\n\rconnectionRef\x18\x04 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\"Y\n\x15PredictionCacheStatus\x12@\n\x0clastAccessed\x18\x01 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\"\xa8\x01\n\x0ePredictionList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12T\n\x05items\x18\x02 \x03(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Prediction\"\x80\x02\n\x15PredictionLoggingSpec\x12\x0f\n\x07\x65nabled\x18\x01 \x01(\x08\x12\x15\n\rsamplePercent\x18\x02 \x01(\x05\x12\x0c\n\x04rows\x18\x03 \x01(\x05\x12\x19\n\x11\x62\x61\x63kupFreqSeconds\x18\x04 \x01(\x05\x12@\n\x13\x62\x61\x63kupConnectionRef\x18\x05 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12T\n\x08location\x18\x06 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation\"\xdc\x07\n\x0ePredictionSpec\x12\x13\n\x0bversionName\x18\x01 \x01(\t\x12\x16\n\x0emodelClassName\x18\x02 \x01(\t\x12\x39\n\x0cpredictorRef\x18\x03 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x0f\n\x07labeled\x18\x04 \x01(\x08\x12\x10\n\x08\x66orecast\x18\x05 \x01(\x08\x12:\n\rdataSourceRef\x18\x06 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12R\n\x05input\x18\x07 \x01(\x0b\x32\x43.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataInputSpec\x12T\n\x06output\x18\x08 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataOutputSpec\x12\x15\n\rcreateDataset\x18\t \x01(\x08\x12[\n\tunitTests\x18\n \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.training.v1alpha1.ModelTestSuite\x12\r\n\x05owner\x18\x0b \x01(\t\x12X\n\tresources\x18\x0c \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec\x12\x1d\n\x15\x61\x63tiveDeadlineSeconds\x18\r \x01(\x03\x12\x10\n\x08priority\x18\x0e \x01(\t\x12\x0f\n\x07\x61\x62orted\x18\x0f \x01(\x08\x12\x0b\n\x03ttl\x18\x10 \x01(\x05\x12g\n\x0c\x66orecastSpec\x18\x11 \x01(\x0b\x32Q.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastPredictionSpec\x12;\n\x0eservingsiteRef\x18\x13 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12v\n\x11partitionLocation\x18\x14 \x01(\x0b\x32[.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PartitionPredictionLocationsSpec\x12\x0f\n\x07workers\x18\x15 \x01(\x05\"\xe0\x06\n\x10PredictionStatus\x12?\n\x0b\x63ompletedAt\x18\x01 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12\r\n\x05phase\x18\x02 \x01(\t\x12\x61\n\x0funitTestsResult\x18\x03 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuiteResult\x12\x1a\n\x12observedGeneration\x18\x04 \x01(\x03\x12\x0c\n\x04rows\x18\x05 \x01(\x05\x12\x13\n\x0btriggeredBy\x18\x06 \x01(\t\x12K\n\x04logs\x18\x07 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Logs\x12=\n\tupdatedAt\x18\x08 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12\x15\n\rfailureReason\x18\t \x01(\t\x12\x16\n\x0e\x66\x61ilureMessage\x18\n \x01(\t\x12\x37\n\ndatasetRef\x18\x0b \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12V\n\x07\x63olumns\x18\x0c \x03(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.ColumnHistogram\x12\x0f\n\x07\x64rifted\x18\r \x01(\x08\x12[\n\x08\x66orecast\x18\x0e \x01(\x0b\x32I.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForecastStatus\x12[\n\x05usage\x18\x0f \x01(\x0b\x32L.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceConsumption\x12\x43\n\nconditions\x18\x10 \x03(\x0b\x32/.k8s.io.apimachinery.pkg.apis.meta.v1.Condition\"\x83\x02\n\tPredictor\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12V\n\x04spec\x18\x02 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorSpec\x12Z\n\x06status\x18\x03 \x01(\x0b\x32J.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorStatus\"\xa6\x01\n\rPredictorList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12S\n\x05items\x18\x02 \x03(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.Predictor\"\xf3\x0e\n\rPredictorSpec\x12\x13\n\x0bversionName\x18\x01 \x01(\t\x12\x16\n\x0emodelClassName\x18\x02 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x03 \x01(\t\x12\x37\n\nproductRef\x18\x04 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x10\n\x08template\x18\x05 \x01(\x08\x12\x0e\n\x06online\x18\x06 \x01(\x08\x12;\n\x0eservingsiteRef\x18\x07 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\\\n\x06models\x18\x08 \x03(\x0b\x32L.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ModelDeploymentSpec\x12_\n\x0bprogressive\x18\t \x01(\x0b\x32J.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ProgressiveSpec\x12[\n\x0f\x61rtifactsFolder\x18\n \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataLocation\x12S\n\x06\x61\x63\x63\x65ss\x18\x0b \x01(\x0b\x32\x43.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AccessSpec\x12\x10\n\x08replicas\x18\x0c \x01(\x05\x12_\n\x0b\x61utoScaling\x18\r \x01(\x0b\x32J.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.AutoScalingSpec\x12\r\n\x05owner\x18\x0e \x01(\t\x12X\n\tresources\x18\x0f \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpec\x12]\n\x05\x63\x61\x63he\x18\x10 \x01(\x0b\x32N.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheSpec\x12`\n\x05store\x18\x11 \x01(\x0b\x32Q.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineFeatureStoreSpec\x12\\\n\x07serving\x18\x12 \x01(\x0b\x32K.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelServingSpec\x12\x0c\n\x04task\x18\x13 \x01(\t\x12\x1b\n\x13predictionThreshold\x18\x14 \x01(\x01\x12\\\n\x05\x64rift\x18\x15 \x01(\x0b\x32M.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.DriftDetectionSpec\x12]\n\x08\x66\x65\x65\x64\x62\x61\x63k\x18\x16 \x01(\x0b\x32K.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FeedbackTestSpec\x12\x38\n\x0bnotifierRef\x18\x17 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12k\n\x11predictionLogging\x18\x18 \x01(\x0b\x32P.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionLoggingSpec\x12\x65\n\x0e\x66orwardCurtain\x18\x19 \x01(\x0b\x32M.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ForwardCurtainSpec\x12g\n\x0f\x62\x61\x63kwardCurtain\x18\x1a \x01(\x0b\x32N.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BackwardCurtainSpec\x12^\n\x08\x66\x61stSlow\x18\x1b \x01(\x0b\x32L.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.FastSlowModelSpec\x12]\n\x05\x62\x61tch\x18\x1c \x01(\x0b\x32N.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.BatchPredictionSpec\"\xc5\x08\n\x0fPredictorStatus\x12\x1a\n\x12observedGeneration\x18\x01 \x01(\x03\x12W\n\x07history\x18\x02 \x03(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelRecord\x12\x66\n\x0cmodelsStatus\x18\x04 \x03(\x0b\x32P.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.ModelDeploymentStatus\x12i\n\x12predictorletStatus\x18\x05 \x01(\x0b\x32M.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictorletStatus\x12\x65\n\x0b\x63\x61\x63heStatus\x18\x06 \x01(\x0b\x32P.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.PredictionCacheStatus\x12g\n\x11onlineStoreStatus\x18\x07 \x01(\x0b\x32L.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.OnlineStoreStatus\x12=\n\tupdatedAt\x18\x08 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12\x10\n\x08\x65ndPoint\x18\t \x01(\t\x12\x15\n\rfailureReason\x18\n \x01(\t\x12\x16\n\x0e\x66\x61ilureMessage\x18\x0b \x01(\t\x12\x42\n\x12loadBalancerStatus\x18\x0c \x01(\x0b\x32&.k8s.io.api.core.v1.LoadBalancerStatus\x12\x42\n\x15lastPredictionDataset\x18\r \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x65\n\x13servingTestsResults\x18\x0e \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.TestSuiteResult\x12\x66\n\x12predictionSchedule\x18\x0f \x01(\x0b\x32J.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.RunScheduleStatus\x12\x43\n\nconditions\x18\x11 \x03(\x0b\x32/.k8s.io.apimachinery.pkg.apis.meta.v1.Condition\"\xdf\x03\n\x12PredictorletStatus\x12\x11\n\timageName\x18\x01 \x01(\t\x12:\n\rdeploymentRef\x18\x02 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x37\n\nserviceRef\x18\x03 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x0b\n\x03p50\x18\x04 \x01(\x01\x12\x0b\n\x03p95\x18\x05 \x01(\x01\x12\x0b\n\x03p99\x18\x06 \x01(\x01\x12\x1a\n\x12\x64\x61ilyPredictionAvg\x18\x07 \x01(\x05\x12\x18\n\x10totalPredictions\x18\x08 \x01(\x05\x12\x1c\n\x14lastDailyPredictions\x18\t \x03(\x05\x12\x46\n\x12lastPredictionTime\x18\n \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12\x13\n\x0blastFailure\x18\x0b \x01(\t\x12i\n\x0eobjectStatuses\x18\x0c \x03(\x0b\x32Q.github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.KubernetesObjectStatus\"R\n\x0fProgressiveSpec\x12\x0e\n\x06warmup\x18\x01 \x01(\x05\x12\x18\n\x10trafficIncrement\x18\x02 \x01(\x05\x12\x15\n\rcanaryMetrics\x18\x03 \x03(\t\"[\n\x0fValidationError\x12\x0e\n\x06\x63olumn\x18\x01 \x01(\t\x12\x0e\n\x06metric\x18\x02 \x01(\t\x12\x0b\n\x03min\x18\x03 \x01(\x01\x12\x0b\n\x03max\x18\x04 \x01(\x01\x12\x0e\n\x06\x61\x63tual\x18\x05 \x01(\x01\x42;Z9github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.pkg.apis.inference.v1alpha1.generated_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z9github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1'
  _FORECASTPREDICTIONSPEC_HIERARCHYVALUESENTRY._options = None
  _FORECASTPREDICTIONSPEC_HIERARCHYVALUESENTRY._serialized_options = b'8\001'
  _FORECASTSPEC_RUNSENTRY._options = None
  _FORECASTSPEC_RUNSENTRY._serialized_options = b'8\001'
  _MODELDEPLOYMENTSTATUS_METRICSHISTORYENTRY._options = None
  _MODELDEPLOYMENTSTATUS_METRICSHISTORYENTRY._serialized_options = b'8\001'
  _AUTOSCALINGSPEC._serialized_start=549
  _AUTOSCALINGSPEC._serialized_end=679
  _BACKWARDCURTAINSPEC._serialized_start=682
  _BACKWARDCURTAINSPEC._serialized_end=824
  _BATCHPREDICTIONSPEC._serialized_start=827
  _BATCHPREDICTIONSPEC._serialized_end=1029
  _CUSTOMAPPSPEC._serialized_start=1031
  _CUSTOMAPPSPEC._serialized_end=1155
  _DATAAPP._serialized_start=1158
  _DATAAPP._serialized_end=1411
  _DATAAPPLIST._serialized_start=1414
  _DATAAPPLIST._serialized_end=1576
  _DATAAPPSPEC._serialized_start=1579
  _DATAAPPSPEC._serialized_end=2093
  _DATAAPPSTATUS._serialized_start=2096
  _DATAAPPSTATUS._serialized_end=2440
  _DRIFTDETECTIONSPEC._serialized_start=2443
  _DRIFTDETECTIONSPEC._serialized_end=2939
  _DRIFTDETECTIONSTATUS._serialized_start=2941
  _DRIFTDETECTIONSTATUS._serialized_end=2963
  _FASTSLOWMODELSPEC._serialized_start=2966
  _FASTSLOWMODELSPEC._serialized_end=3163
  _FEEDBACKTESTSPEC._serialized_start=3166
  _FEEDBACKTESTSPEC._serialized_end=3372
  _FORECASTPREDICTIONSPEC._serialized_start=3375
  _FORECASTPREDICTIONSPEC._serialized_end=3671
  _FORECASTPREDICTIONSPEC_HIERARCHYVALUESENTRY._serialized_start=3617
  _FORECASTPREDICTIONSPEC_HIERARCHYVALUESENTRY._serialized_end=3671
  _FORECASTRUN._serialized_start=3674
  _FORECASTRUN._serialized_end=3805
  _FORECASTSPEC._serialized_start=3808
  _FORECASTSPEC._serialized_end=4036
  _FORECASTSPEC_RUNSENTRY._serialized_start=3921
  _FORECASTSPEC_RUNSENTRY._serialized_end=4036
  _FORECASTSTATUS._serialized_start=4039
  _FORECASTSTATUS._serialized_end=4248
  _FORWARDCURTAINSPEC._serialized_start=4250
  _FORWARDCURTAINSPEC._serialized_end=4361
  _KUBERNETESOBJECTSTATUS._serialized_start=4363
  _KUBERNETESOBJECTSTATUS._serialized_end=4453
  _METRICHISTORY._serialized_start=4455
  _METRICHISTORY._serialized_end=4503
  _MODELDEPLOYMENTSTATUS._serialized_start=4506
  _MODELDEPLOYMENTSTATUS._serialized_end=5829
  _MODELDEPLOYMENTSTATUS_METRICSHISTORYENTRY._serialized_start=5702
  _MODELDEPLOYMENTSTATUS_METRICSHISTORYENTRY._serialized_end=5829
  _MODELRECORD._serialized_start=5832
  _MODELRECORD._serialized_end=6057
  _MODELSERVINGSPEC._serialized_start=6060
  _MODELSERVINGSPEC._serialized_end=6188
  _ONLINEFEATURESTORESPEC._serialized_start=6190
  _ONLINEFEATURESTORESPEC._serialized_end=6249
  _ONLINESTORESTATUS._serialized_start=6251
  _ONLINESTORESTATUS._serialized_end=6336
  _PARTITIONPREDICTIONLOCATIONSSPEC._serialized_start=6338
  _PARTITIONPREDICTIONLOCATIONSSPEC._serialized_end=6399
  _PREDICTION._serialized_start=6402
  _PREDICTION._serialized_end=6664
  _PREDICTIONCACHESPEC._serialized_start=6667
  _PREDICTIONCACHESPEC._serialized_end=6798
  _PREDICTIONCACHESTATUS._serialized_start=6800
  _PREDICTIONCACHESTATUS._serialized_end=6889
  _PREDICTIONLIST._serialized_start=6892
  _PREDICTIONLIST._serialized_end=7060
  _PREDICTIONLOGGINGSPEC._serialized_start=7063
  _PREDICTIONLOGGINGSPEC._serialized_end=7319
  _PREDICTIONSPEC._serialized_start=7322
  _PREDICTIONSPEC._serialized_end=8310
  _PREDICTIONSTATUS._serialized_start=8313
  _PREDICTIONSTATUS._serialized_end=9177
  _PREDICTOR._serialized_start=9180
  _PREDICTOR._serialized_end=9439
  _PREDICTORLIST._serialized_start=9442
  _PREDICTORLIST._serialized_end=9608
  _PREDICTORSPEC._serialized_start=9611
  _PREDICTORSPEC._serialized_end=11518
  _PREDICTORSTATUS._serialized_start=11521
  _PREDICTORSTATUS._serialized_end=12614
  _PREDICTORLETSTATUS._serialized_start=12617
  _PREDICTORLETSTATUS._serialized_end=13096
  _PROGRESSIVESPEC._serialized_start=13098
  _PROGRESSIVESPEC._serialized_end=13180
  _VALIDATIONERROR._serialized_start=13182
  _VALIDATIONERROR._serialized_end=13273
# @@protoc_insertion_point(module_scope)
