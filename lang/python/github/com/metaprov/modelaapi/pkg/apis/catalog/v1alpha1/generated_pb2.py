# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from k8s.io.api.core.v1 import generated_pb2 as k8s_dot_io_dot_api_dot_core_dot_v1_dot_generated__pb2
from k8s.io.apimachinery.pkg.api.resource import generated_pb2 as k8s_dot_io_dot_apimachinery_dot_pkg_dot_api_dot_resource_dot_generated__pb2
from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2
from k8s.io.apimachinery.pkg.runtime import generated_pb2 as k8s_dot_io_dot_apimachinery_dot_pkg_dot_runtime_dot_generated__pb2
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as k8s_dot_io_dot_apimachinery_dot_pkg_dot_runtime_dot_schema_dot_generated__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nGgithub.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated.proto\x12\x37github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1\x1a\"k8s.io/api/core/v1/generated.proto\x1a\x34k8s.io/apimachinery/pkg/api/resource/generated.proto\x1a\x34k8s.io/apimachinery/pkg/apis/meta/v1/generated.proto\x1a/k8s.io/apimachinery/pkg/runtime/generated.proto\x1a\x36k8s.io/apimachinery/pkg/runtime/schema/generated.proto\"\xae\x01\n\nAccessSpec\x12\x0c\n\x04port\x18\x01 \x01(\x05\x12\x10\n\x08nodePort\x18\x02 \x01(\x05\x12\x0c\n\x04path\x18\x03 \x01(\t\x12\x12\n\naccessType\x18\x04 \x01(\t\x12\x0c\n\x04rest\x18\x05 \x01(\x08\x12\x12\n\nauthMethod\x18\x06 \x01(\t\x12<\n\x0f\x61pikeySecretRef\x18\x07 \x01(\x0b\x32#.k8s.io.api.core.v1.SecretReference\"b\n\x12\x41\x63\x63ountPermissions\x12\x13\n\x0b\x61\x63\x63ountName\x18\x01 \x01(\t\x12\x37\n\x05roles\x18\x02 \x03(\x0b\x32(.k8s.io.api.core.v1.LocalObjectReference\"\xa5\x01\n\tAlgorithm\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12T\n\x04spec\x18\x02 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec\"\xa4\x01\n\rAlgorithmList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12Q\n\x05items\x18\x02 \x03(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm\"\xc0\x01\n\rAlgorithmSpec\x12\x15\n\rframeworkName\x18\x01 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x02 \x01(\t\x12\x0b\n\x03url\x18\x03 \x01(\t\x12\r\n\x05tasks\x18\x04 \x03(\t\x12\x0e\n\x06sparse\x18\x05 \x01(\x08\x12W\n\x06ranges\x18\x06 \x03(\x0b\x32G.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ParameterRange\"\xf3\x01\n\x05\x43loud\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12P\n\x04spec\x18\x02 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.CloudSpec\x12T\n\x06status\x18\x03 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.CloudStatus\"\x9c\x01\n\tCloudList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12M\n\x05items\x18\x02 \x03(\x0b\x32>.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Cloud\"\xec\x02\n\tCloudSpec\x12\x19\n\x11\x64\x65\x66\x61ultRegionName\x18\x01 \x01(\t\x12\x1f\n\x17\x64\x65\x66\x61ultMachineClassName\x18\x02 \x01(\t\x12\x1b\n\x13\x64\x65\x66\x61ultGpuClassName\x18\x03 \x01(\t\x12]\n\x0emachineClasses\x18\x04 \x03(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.MachineClass\x12U\n\ngpuClasses\x18\x05 \x03(\x0b\x32\x41.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.GpuClass\x12P\n\x07regions\x18\x06 \x03(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Region\"\xc7\x01\n\x0b\x43loudStatus\x12_\n\x0cmachineCosts\x18\x01 \x03(\x0b\x32I.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.MachineClassCost\x12W\n\x08gpuCosts\x18\x02 \x03(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.GpuClassCost\"A\n\x0c\x43ompilerSpec\x12\x0e\n\x06\x65nable\x18\x01 \x01(\x08\x12\x10\n\x08\x63ompiler\x18\x02 \x01(\t\x12\x0f\n\x07targets\x18\x03 \x03(\t\"l\n\x0f\x43onfusionMatrix\x12Y\n\x04rows\x18\x01 \x03(\x0b\x32K.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ConfusionMatrixRow\"F\n\x12\x43onfusionMatrixRow\x12\t\n\x01t\x18\x01 \x01(\t\x12\t\n\x01p\x18\x02 \x01(\t\x12\r\n\x05\x63ount\x18\x03 \x01(\x05\x12\x0b\n\x03pct\x18\x04 \x01(\x01\"K\n\x0c\x43ontainerLog\x12\x0b\n\x03job\x18\x01 \x01(\t\x12\x11\n\tcontainer\x18\x02 \x01(\t\x12\x0b\n\x03key\x18\x03 \x01(\t\x12\x0e\n\x06\x62ucket\x18\x04 \x01(\t\"\"\n\nCurvePoint\x12\t\n\x01x\x18\x01 \x01(\x01\x12\t\n\x01y\x18\x02 \x01(\x01\"(\n\nDataCenter\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0c\n\x04\x63ode\x18\x02 \x01(\t\"\xda\x01\n\x0c\x44\x61taLocation\x12\x0c\n\x04type\x18\x01 \x01(\t\x12\x16\n\x0e\x63onnectionName\x18\x02 \x01(\t\x12\x12\n\nbucketName\x18\x03 \x01(\t\x12\x0c\n\x04path\x18\x04 \x01(\t\x12\r\n\x05table\x18\x05 \x01(\t\x12\x10\n\x08\x64\x61tabase\x18\x06 \x01(\t\x12\x0b\n\x03sql\x18\x07 \x01(\t\x12\r\n\x05topic\x18\x08 \x01(\t\x12\x0b\n\x03url\x18\t \x01(\t\x12\x38\n\x0bresourceRef\x18\n \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\"\xc5\x04\n\x0c\x44\x61taTestCase\x12\x0f\n\x07\x65nabled\x18\x01 \x01(\x08\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x12\n\nassertThat\x18\x03 \x01(\t\x12\x36\n\tentityRef\x18\x04 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x39\n\x0c\x63ompareToRef\x18\x05 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x0e\n\x06\x63olumn\x18\x06 \x01(\t\x12\x0c\n\x04type\x18\x07 \x01(\t\x12\x0e\n\x06metric\x18\x08 \x01(\t\x12\x15\n\rexpectedValue\x18\t \x01(\x01\x12\x18\n\x10\x65xpectedCategory\x18\n \x01(\t\x12\r\n\x05lower\x18\x0b \x01(\x01\x12\r\n\x05upper\x18\x0c \x01(\x01\x12\x13\n\x0b\x65xpectedSet\x18\r \x03(\t\x12\x16\n\x0elowerInclusive\x18\x0e \x01(\x08\x12\x16\n\x0eupperInclusive\x18\x0f \x01(\x08\x12\x11\n\tgenerated\x18\x10 \x01(\x08\x12\x0c\n\x04tags\x18\x11 \x03(\t\x12\x0f\n\x07\x63olumn2\x18\x12 \x01(\t\x12\x37\n\nentityRef2\x18\x13 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x0f\n\x07\x63olumns\x18\x14 \x03(\t\x12\x15\n\rfeatureFilter\x18\x15 \x01(\t\x12\x12\n\ndataFilter\x18\x16 \x01(\t\x12\x15\n\rreferenceType\x18\x17 \x01(\t\x12\x0f\n\x07periods\x18\x18 \x01(\x05\"\xac\x01\n\x12\x44\x61taTestCaseResult\x12\x0c\n\x04name\x18\x01 \x01(\t\x12T\n\x06\x61\x63tual\x18\x02 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Measurement\x12\x0f\n\x07\x66\x61ilure\x18\x03 \x01(\x08\x12\r\n\x05\x65rror\x18\x04 \x01(\x08\x12\x12\n\nfailureMsg\x18\x05 \x01(\t\"0\n\x0c\x46ileLocation\x12\x12\n\nbucketName\x18\x01 \x01(\t\x12\x0c\n\x04path\x18\x02 \x01(\t\"t\n\x0cGithubEvents\x12\x19\n\x11gitConnectionName\x18\x01 \x01(\t\x12\x12\n\nrepository\x18\x02 \x01(\t\x12\x0e\n\x06\x62ranch\x18\x03 \x01(\t\x12\x15\n\rblobNameRegex\x18\x04 \x01(\t\x12\x0e\n\x06\x65vents\x18\x05 \x03(\t\"z\n\x08GpuClass\x12\x0c\n\x04\x63ode\x18\x01 \x01(\t\x12\x12\n\nregionName\x18\x02 \x01(\t\x12\x0c\n\x04vcpu\x18\x03 \x01(\x05\x12>\n\x06gpumem\x18\x04 \x01(\x0b\x32..k8s.io.apimachinery.pkg.api.resource.Quantity\"\xb5\x01\n\x0cGpuClassCost\x12\x0c\n\x04\x63ode\x18\x01 \x01(\t\x12\x0e\n\x06region\x18\x02 \x01(\t\x12\x45\n\rcostPerMinute\x18\x03 \x01(\x0b\x32..k8s.io.apimachinery.pkg.api.resource.Quantity\x12@\n\x08\x63ostSpot\x18\x04 \x01(\x0b\x32..k8s.io.apimachinery.pkg.api.resource.Quantity\"c\n\rHistogramData\x12\x0c\n\x04\x62ins\x18\x01 \x03(\x01\x12\x12\n\ncategories\x18\x02 \x03(\t\x12\x0e\n\x06\x63ounts\x18\x03 \x03(\x01\x12\x0f\n\x07missing\x18\x04 \x01(\x05\x12\x0f\n\x07invalid\x18\x05 \x01(\x05\"I\n\x06Images\x12\x14\n\x0ctrainerImage\x18\x01 \x01(\t\x12\x11\n\tdataImage\x18\x02 \x01(\t\x12\x16\n\x0epublisherImage\x18\x03 \x01(\t\"\xaf\x01\n\rLastRunStatus\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0e\n\x06status\x18\x02 \x01(\t\x12?\n\x0b\x63ompletedAt\x18\x03 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12\x10\n\x08\x64uration\x18\x04 \x01(\x05\x12\x15\n\rfailureReason\x18\x05 \x01(\t\x12\x16\n\x0e\x66\x61ilureMessage\x18\x06 \x01(\t\"*\n\x03Lib\x12\x12\n\nframeworks\x18\x01 \x01(\t\x12\x0f\n\x07version\x18\x02 \x01(\t\"q\n\x04Logs\x12\x0e\n\x06\x62ucket\x18\x01 \x01(\t\x12Y\n\ncontainers\x18\x02 \x03(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ContainerLog\"\xa9\x01\n\x0bMLFramework\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12V\n\x04spec\x18\x02 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec\"\xa8\x01\n\x0fMLFrameworkList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12S\n\x05items\x18\x02 \x03(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.MLFramework\"R\n\x0fMLFrameworkSpec\x12\x0b\n\x03url\x18\x01 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x02 \x01(\t\x12\x0f\n\x07version\x18\x03 \x01(\t\x12\x0c\n\x04lang\x18\x04 \x01(\t\"\x8c\x01\n\x0cMachineClass\x12\x0c\n\x04\x63ode\x18\x01 \x01(\t\x12\x12\n\nregionName\x18\x02 \x01(\t\x12;\n\x03mem\x18\x03 \x01(\x0b\x32..k8s.io.apimachinery.pkg.api.resource.Quantity\x12\x0c\n\x04vcpu\x18\x04 \x01(\x05\x12\x0f\n\x07storage\x18\x05 \x01(\t\"\xb9\x01\n\x10MachineClassCost\x12\x0c\n\x04\x63ode\x18\x01 \x01(\t\x12\x0e\n\x06region\x18\x02 \x01(\t\x12\x45\n\rcostPerMinute\x18\x03 \x01(\x0b\x32..k8s.io.apimachinery.pkg.api.resource.Quantity\x12@\n\x08\x63ostSpot\x18\x04 \x01(\x0b\x32..k8s.io.apimachinery.pkg.api.resource.Quantity\"\xab\x01\n\x0cManagedImage\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12W\n\x04spec\x18\x02 \x01(\x0b\x32I.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ManagedImageSpec\"\xaa\x01\n\x10ManagedImageList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12T\n\x05items\x18\x02 \x03(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ManagedImage\"\xbb\x03\n\x10ManagedImageSpec\x12\x13\n\x0b\x64\x65scription\x18\x01 \x01(\t\x12\x10\n\x08registry\x18\x02 \x01(\t\x12\x12\n\nrepository\x18\x03 \x01(\t\x12\x0b\n\x03tag\x18\x04 \x01(\t\x12\'\n\x03\x65nv\x18\x05 \x03(\x0b\x32\x1a.k8s.io.api.core.v1.EnvVar\x12\x0b\n\x03gpu\x18\x06 \x01(\x08\x12\x0e\n\x06\x61\x63tive\x18\x07 \x01(\x08\x12\x0f\n\x07preload\x18\x08 \x01(\x08\x12:\n\rconnectionRef\x18\t \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x0c\n\x04\x62\x61se\x18\n \x01(\t\x12\x0c\n\x04role\x18\x0b \x01(\t\x12\x13\n\x0bmantainedBy\x18\x0c \x01(\t\x12\x0b\n\x03uri\x18\r \x01(\t\x12\x12\n\nframeworks\x18\x0e \x03(\t\x12J\n\x04libs\x18\x0f \x03(\x0b\x32<.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Lib\x12\n\n\x02os\x18\x10 \x01(\t\x12\x11\n\tosVersion\x18\x11 \x01(\t\x12\x0f\n\x07private\x18\x12 \x01(\x08\"\x9a\x02\n\x0bMeasurement\x12\x33\n\x06\x65ntity\x18\x01 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x0e\n\x06\x63olumn\x18\x02 \x01(\t\x12\x0e\n\x06metric\x18\x03 \x01(\t\x12\r\n\x05value\x18\x04 \x01(\x01\x12\x0e\n\x06stddev\x18\x05 \x01(\x01\x12\x0f\n\x07\x62oolQty\x18\x06 \x01(\x08\x12\x10\n\x08\x63\x61tegory\x18\x07 \x01(\t\x12\x10\n\x08valueSet\x18\x08 \x03(\t\x12=\n\ttimePoint\x18\t \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12\x10\n\x08taskType\x18\n \x01(\t\x12\x11\n\talgorithm\x18\x0b \x01(\t\"\xb3\x02\n\x13ModelDeploymentSpec\x12\x35\n\x08modelRef\x18\x01 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x0c\n\x04port\x18\x02 \x01(\x05\x12\x14\n\x0cmodelVersion\x18\x03 \x01(\t\x12\x0f\n\x07traffic\x18\x04 \x01(\x05\x12\x0c\n\x04role\x18\x05 \x01(\t\x12\x10\n\x08mountTar\x18\t \x01(\x08\x12\x17\n\x0ftrafficSelector\x18\n \x01(\t\x12\x37\n\napprovedBy\x18\x0c \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12>\n\napprovedAt\x18\r \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\"\xd1\x01\n\x10NotificationSpec\x12\x0b\n\x03ttl\x18\x01 \x01(\x05\x12\x14\n\x0cnotifierName\x18\x02 \x01(\t\x12i\n\x08selector\x18\x03 \x03(\x0b\x32W.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.NotificationSpec.SelectorEntry\x1a/\n\rSelectorEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"-\n\rObjectiveSpec\x12\x0e\n\x06metric\x18\x01 \x01(\t\x12\x0c\n\x04goal\x18\x02 \x01(\t\"^\n\x07PRCurve\x12S\n\x06values\x18\x01 \x03(\x0b\x32\x43.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.CurvePoint\"\x93\x02\n\x0eParameterRange\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0c\n\x04type\x18\x02 \x01(\t\x12\x0b\n\x03low\x18\x03 \x01(\x01\x12\x0c\n\x04high\x18\x04 \x01(\x01\x12\x0c\n\x04step\x18\x05 \x01(\x05\x12\x0b\n\x03log\x18\x06 \x01(\x08\x12\x0f\n\x07\x63hoices\x18\x07 \x03(\t\x12\x14\n\x0c\x64\x65\x66\x61ultValue\x18\x08 \x01(\x01\x12\x15\n\rdefaultChoice\x18\t \x01(\t\x12\x13\n\x0b\x63onditional\x18\n \x01(\x08\x12\x0e\n\x06parent\x18\x0b \x01(\t\x12\x16\n\x0eparentValueCat\x18\x0c \x01(\t\x12\x1a\n\x12parentValueInteger\x18\r \x01(\x05\x12\x18\n\x10parentValueFloat\x18\x0e \x01(\x01\"p\n\x0fPermissionsSpec\x12]\n\x08\x61\x63\x63ounts\x18\x01 \x03(\x0b\x32K.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AccountPermissions\"\xb1\x01\n\x0fPretrainedModel\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12Z\n\x04spec\x18\x02 \x01(\x0b\x32L.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec\"\xb0\x01\n\x13PretrainedModelList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12W\n\x05items\x18\x02 \x03(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PretrainedModel\"$\n\x13PretrainedModelSpec\x12\r\n\x05image\x18\x01 \x01(\t\"\xad\x01\n\rPublicDataset\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12X\n\x04spec\x18\x02 \x01(\x0b\x32J.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec\"\xac\x01\n\x11PublicDatasetList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12U\n\x05items\x18\x02 \x03(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PublicDataset\"\xb6\x02\n\x11PublicDatasetSpec\x12\x0b\n\x03url\x18\x01 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x02 \x01(\t\x12\x0c\n\x04task\x18\x03 \x01(\t\x12\x10\n\x08openMLID\x18\x04 \x01(\t\x12\x0f\n\x07\x64\x61taUrl\x18\x05 \x01(\t\x12\x10\n\x08\x63itation\x18\x06 \x01(\t\x12\x0c\n\x04rows\x18\x07 \x01(\x05\x12\x0f\n\x07\x63olumns\x18\x08 \x01(\x05\x12\x10\n\x08\x66ileSize\x18\t \x01(\x05\x12\x14\n\x0ctargetColumn\x18\n \x01(\t\x12\x10\n\x08industry\x18\x0b \x01(\t\x12\x12\n\nimbalanced\x18\x0c \x01(\x08\x12\x14\n\x0c\x64\x61tasourceCR\x18\r \x01(\t\x12\x11\n\tdatasetCR\x18\x0e \x01(\t\x12\x0f\n\x07studyCR\x18\x0f \x01(\t\x12\x15\n\rdataProductCR\x18\x10 \x01(\t\"\xb6\x01\n\x06Region\x12\x0c\n\x04\x63ode\x18\x01 \x01(\t\x12\x1d\n\x15\x64\x65\x66\x61ultDatacenterName\x18\x02 \x01(\t\x12\x10\n\x08location\x18\x03 \x01(\t\x12\x13\n\x0b\x62illingCode\x18\x04 \x01(\t\x12X\n\x0b\x64\x61tacenters\x18\x05 \x03(\x0b\x32\x43.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataCenter\"?\n\x13ResourceConsumption\x12\x0b\n\x03\x63pu\x18\x01 \x01(\x04\x12\x0e\n\x06memory\x18\x02 \x01(\x04\x12\x0b\n\x03gpu\x18\x03 \x01(\x04\"t\n\x0cResourceSpec\x12\x14\n\x0cworkloadName\x18\x01 \x01(\t\x12\x0e\n\x06\x63ustom\x18\x02 \x01(\x08\x12>\n\x0crequirements\x18\x03 \x01(\x0b\x32(.k8s.io.api.core.v1.ResourceRequirements\"b\n\x0bRocAucCurve\x12S\n\x06values\x18\x01 \x03(\x0b\x32\x43.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.CurvePoint\"\xcd\x01\n\x0bRunSchedule\x12\x0f\n\x07\x65nabled\x18\x01 \x01(\x08\x12\x0c\n\x04\x63ron\x18\x02 \x01(\t\x12\x0c\n\x04type\x18\x03 \x01(\t\x12\x15\n\rmaxRetryCount\x18\x04 \x01(\x05\x12\x15\n\rretryDelaySec\x18\x05 \x01(\x05\x12\x12\n\ntimeoutSec\x18\x06 \x01(\x05\x12\x10\n\x08timezone\x18\x07 \x01(\t\x12=\n\tnextRunAt\x18\x08 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\"\xfe\x01\n\x11RunScheduleStatus\x12=\n\tlastRunAt\x18\x01 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12\x15\n\rfailureReason\x18\x02 \x01(\t\x12\x16\n\x0e\x66\x61ilureMessage\x18\x03 \x01(\t\x12\x13\n\x0blastRunName\x18\x04 \x01(\t\x12R\n\x0blastRunLogs\x18\x05 \x01(\x0b\x32=.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Logs\x12\x12\n\nretryCount\x18\x06 \x01(\x05\"r\n\tTestSuite\x12\x0f\n\x07\x65nabled\x18\x01 \x01(\x08\x12T\n\x05tests\x18\x02 \x03(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataTestCase\"\xc7\x02\n\x0fTestSuiteResult\x12\x36\n\tentityRef\x18\x01 \x01(\x0b\x32#.k8s.io.api.core.v1.ObjectReference\x12\x10\n\x08\x66\x61ilures\x18\x02 \x01(\x05\x12\x0e\n\x06\x65rrors\x18\x03 \x01(\x05\x12=\n\tstartedAt\x18\x04 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12?\n\x0b\x63ompletedAt\x18\x05 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12Z\n\x05tests\x18\x06 \x03(\x0b\x32K.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.DataTestCaseResult\"G\n\x0fWorkerRunResult\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0b\n\x03uri\x18\x02 \x01(\t\x12\x0c\n\x04task\x18\x03 \x01(\t\x12\r\n\x05\x65rror\x18\x04 \x01(\t\"\xad\x01\n\rWorkloadClass\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12X\n\x04spec\x18\x02 \x01(\x0b\x32J.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec\"\xac\x01\n\x11WorkloadClassList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12U\n\x05items\x18\x02 \x03(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkloadClass\"u\n\x11WorkloadClassSpec\x12`\n\x11resourcesTemplate\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ResourceSpecB9Z7github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.generated_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z7github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1'
  _NOTIFICATIONSPEC_SELECTORENTRY._options = None
  _NOTIFICATIONSPEC_SELECTORENTRY._serialized_options = b'8\001'
  _ACCESSSPEC._serialized_start=382
  _ACCESSSPEC._serialized_end=556
  _ACCOUNTPERMISSIONS._serialized_start=558
  _ACCOUNTPERMISSIONS._serialized_end=656
  _ALGORITHM._serialized_start=659
  _ALGORITHM._serialized_end=824
  _ALGORITHMLIST._serialized_start=827
  _ALGORITHMLIST._serialized_end=991
  _ALGORITHMSPEC._serialized_start=994
  _ALGORITHMSPEC._serialized_end=1186
  _CLOUD._serialized_start=1189
  _CLOUD._serialized_end=1432
  _CLOUDLIST._serialized_start=1435
  _CLOUDLIST._serialized_end=1591
  _CLOUDSPEC._serialized_start=1594
  _CLOUDSPEC._serialized_end=1958
  _CLOUDSTATUS._serialized_start=1961
  _CLOUDSTATUS._serialized_end=2160
  _COMPILERSPEC._serialized_start=2162
  _COMPILERSPEC._serialized_end=2227
  _CONFUSIONMATRIX._serialized_start=2229
  _CONFUSIONMATRIX._serialized_end=2337
  _CONFUSIONMATRIXROW._serialized_start=2339
  _CONFUSIONMATRIXROW._serialized_end=2409
  _CONTAINERLOG._serialized_start=2411
  _CONTAINERLOG._serialized_end=2486
  _CURVEPOINT._serialized_start=2488
  _CURVEPOINT._serialized_end=2522
  _DATACENTER._serialized_start=2524
  _DATACENTER._serialized_end=2564
  _DATALOCATION._serialized_start=2567
  _DATALOCATION._serialized_end=2785
  _DATATESTCASE._serialized_start=2788
  _DATATESTCASE._serialized_end=3369
  _DATATESTCASERESULT._serialized_start=3372
  _DATATESTCASERESULT._serialized_end=3544
  _FILELOCATION._serialized_start=3546
  _FILELOCATION._serialized_end=3594
  _GITHUBEVENTS._serialized_start=3596
  _GITHUBEVENTS._serialized_end=3712
  _GPUCLASS._serialized_start=3714
  _GPUCLASS._serialized_end=3836
  _GPUCLASSCOST._serialized_start=3839
  _GPUCLASSCOST._serialized_end=4020
  _HISTOGRAMDATA._serialized_start=4022
  _HISTOGRAMDATA._serialized_end=4121
  _IMAGES._serialized_start=4123
  _IMAGES._serialized_end=4196
  _LASTRUNSTATUS._serialized_start=4199
  _LASTRUNSTATUS._serialized_end=4374
  _LIB._serialized_start=4376
  _LIB._serialized_end=4418
  _LOGS._serialized_start=4420
  _LOGS._serialized_end=4533
  _MLFRAMEWORK._serialized_start=4536
  _MLFRAMEWORK._serialized_end=4705
  _MLFRAMEWORKLIST._serialized_start=4708
  _MLFRAMEWORKLIST._serialized_end=4876
  _MLFRAMEWORKSPEC._serialized_start=4878
  _MLFRAMEWORKSPEC._serialized_end=4960
  _MACHINECLASS._serialized_start=4963
  _MACHINECLASS._serialized_end=5103
  _MACHINECLASSCOST._serialized_start=5106
  _MACHINECLASSCOST._serialized_end=5291
  _MANAGEDIMAGE._serialized_start=5294
  _MANAGEDIMAGE._serialized_end=5465
  _MANAGEDIMAGELIST._serialized_start=5468
  _MANAGEDIMAGELIST._serialized_end=5638
  _MANAGEDIMAGESPEC._serialized_start=5641
  _MANAGEDIMAGESPEC._serialized_end=6084
  _MEASUREMENT._serialized_start=6087
  _MEASUREMENT._serialized_end=6369
  _MODELDEPLOYMENTSPEC._serialized_start=6372
  _MODELDEPLOYMENTSPEC._serialized_end=6679
  _NOTIFICATIONSPEC._serialized_start=6682
  _NOTIFICATIONSPEC._serialized_end=6891
  _NOTIFICATIONSPEC_SELECTORENTRY._serialized_start=6844
  _NOTIFICATIONSPEC_SELECTORENTRY._serialized_end=6891
  _OBJECTIVESPEC._serialized_start=6893
  _OBJECTIVESPEC._serialized_end=6938
  _PRCURVE._serialized_start=6940
  _PRCURVE._serialized_end=7034
  _PARAMETERRANGE._serialized_start=7037
  _PARAMETERRANGE._serialized_end=7312
  _PERMISSIONSSPEC._serialized_start=7314
  _PERMISSIONSSPEC._serialized_end=7426
  _PRETRAINEDMODEL._serialized_start=7429
  _PRETRAINEDMODEL._serialized_end=7606
  _PRETRAINEDMODELLIST._serialized_start=7609
  _PRETRAINEDMODELLIST._serialized_end=7785
  _PRETRAINEDMODELSPEC._serialized_start=7787
  _PRETRAINEDMODELSPEC._serialized_end=7823
  _PUBLICDATASET._serialized_start=7826
  _PUBLICDATASET._serialized_end=7999
  _PUBLICDATASETLIST._serialized_start=8002
  _PUBLICDATASETLIST._serialized_end=8174
  _PUBLICDATASETSPEC._serialized_start=8177
  _PUBLICDATASETSPEC._serialized_end=8487
  _REGION._serialized_start=8490
  _REGION._serialized_end=8672
  _RESOURCECONSUMPTION._serialized_start=8674
  _RESOURCECONSUMPTION._serialized_end=8737
  _RESOURCESPEC._serialized_start=8739
  _RESOURCESPEC._serialized_end=8855
  _ROCAUCCURVE._serialized_start=8857
  _ROCAUCCURVE._serialized_end=8955
  _RUNSCHEDULE._serialized_start=8958
  _RUNSCHEDULE._serialized_end=9163
  _RUNSCHEDULESTATUS._serialized_start=9166
  _RUNSCHEDULESTATUS._serialized_end=9420
  _TESTSUITE._serialized_start=9422
  _TESTSUITE._serialized_end=9536
  _TESTSUITERESULT._serialized_start=9539
  _TESTSUITERESULT._serialized_end=9866
  _WORKERRUNRESULT._serialized_start=9868
  _WORKERRUNRESULT._serialized_end=9939
  _WORKLOADCLASS._serialized_start=9942
  _WORKLOADCLASS._serialized_end=10115
  _WORKLOADCLASSLIST._serialized_start=10118
  _WORKLOADCLASSLIST._serialized_end=10290
  _WORKLOADCLASSSPEC._serialized_start=10292
  _WORKLOADCLASSSPEC._serialized_end=10409
# @@protoc_insertion_point(module_scope)
