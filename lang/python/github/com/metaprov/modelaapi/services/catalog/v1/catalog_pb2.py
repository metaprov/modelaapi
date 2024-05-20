# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/catalog/v1/catalog.proto
# Protobuf Python Version: 4.25.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_catalog_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n?github.com/metaprov/modelaapi/services/catalog/v1/catalog.proto\x12\x31github.com.metaprov.modelaapi.services.catalog.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1aGgithub.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated.proto\"\xbf\x01\n\x15ListAlgorithmsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x64\n\x06labels\x18\x02 \x03(\x0b\x32T.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"t\n\x16ListAlgorithmsResponse\x12Z\n\nalgorithms\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.AlgorithmList\"6\n\x13GetAlgorithmRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"m\n\x14GetAlgorithmResponse\x12U\n\talgorithm\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Algorithm\"\xc5\x01\n\x18ListManagedimagesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12g\n\x06labels\x18\x02 \x03(\x0b\x32W.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"}\n\x19ListManagedimagesResponse\x12`\n\rmanagedImages\x18\x01 \x01(\x0b\x32I.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ManagedImageList\"9\n\x16GetManagedimageRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"u\n\x17GetManagedimageResponse\x12Z\n\x0bmanagedItem\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.ManagedImage\"\xc3\x01\n\x17ListMLFrameworksRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x66\n\x06labels\x18\x02 \x03(\x0b\x32V.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"z\n\x18ListMLFrameworksResponse\x12^\n\x0cmlframeworks\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.MLFrameworkList\"8\n\x15GetMLFrameworkRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"s\n\x16GetMLFrameworkResponse\x12Y\n\x0bmlframework\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.MLFramework\"\xb7\x01\n\x11ListCloudsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12`\n\x06labels\x18\x02 \x03(\x0b\x32P.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"h\n\x12ListCloudsResponse\x12R\n\x06\x63louds\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.CloudList\"2\n\x0fGetCloudRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"a\n\x10GetCloudResponse\x12M\n\x05\x63loud\x18\x01 \x01(\x0b\x32>.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.Cloud\"\xc7\x01\n\x19ListPublicDatasetsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12h\n\x06labels\x18\x02 \x03(\x0b\x32X.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x80\x01\n\x1aListPublicDatasetsResponse\x12\x62\n\x0epublicDatasets\x18\x01 \x01(\x0b\x32J.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PublicDatasetList\":\n\x17GetPublicDatasetRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"y\n\x18GetPublicDatasetResponse\x12]\n\rpublicDataset\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PublicDataset\"?\n\x1c\x44ownloadPublicDatasetRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\",\n\x1d\x44ownloadPublicDatasetResponse\x12\x0b\n\x03raw\x18\x01 \x01(\x0c\">\n\x1bPreviewPublicDatasetRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"+\n\x1cPreviewPublicDatasetResponse\x12\x0b\n\x03raw\x18\x01 \x01(\x0c\"N\n\x1b\x41pplyPublicDatasetCRRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0e\n\x06\x63rname\x18\x03 \x01(\t\"+\n\x1c\x41pplyPublicDatasetCRResponse\x12\x0b\n\x03raw\x18\x01 \x01(\x0c\"\xcb\x01\n\x1bListPretrainedModelsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12j\n\x06labels\x18\x02 \x03(\x0b\x32Z.github.com.metaprov.modelaapi.services.catalog.v1.ListPretrainedModelsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x86\x01\n\x1cListPretrainedModelsResponse\x12\x66\n\x10pretrainedModels\x18\x01 \x01(\x0b\x32L.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PretrainedModelList\"<\n\x19GetPretrainedModelRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x7f\n\x1aGetPretrainedModelResponse\x12\x61\n\x0fpretrainedModel\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.PretrainedModel\"\xc9\x01\n\x1aListWorkloadClassesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12i\n\x06labels\x18\x02 \x03(\x0b\x32Y.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"|\n\x1bListWorkloadClassesResponse\x12]\n\tworkloads\x18\x01 \x01(\x0b\x32J.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkloadClassList\":\n\x17GetWorkloadClassRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x11\n\tnamespace\x18\x02 \x01(\t\"t\n\x18GetWorkloadClassResponse\x12X\n\x08workload\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.pkg.apis.catalog.v1alpha1.WorkloadClass2\x92\x18\n\x0e\x43\x61talogService\x12\xbc\x01\n\rListAlgorithm\x12H.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsRequest\x1aI.github.com.metaprov.modelaapi.services.catalog.v1.ListAlgorithmsResponse\"\x16\x82\xd3\xe4\x93\x02\x10\x12\x0e/v1/algorithms\x12\xbe\x01\n\x0cGetAlgorithm\x12\x46.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmRequest\x1aG.github.com.metaprov.modelaapi.services.catalog.v1.GetAlgorithmResponse\"\x1d\x82\xd3\xe4\x93\x02\x17\x12\x15/v1/algorithms/{name}\x12\xc9\x01\n\x11ListManagedImages\x12K.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesRequest\x1aL.github.com.metaprov.modelaapi.services.catalog.v1.ListManagedimagesResponse\"\x19\x82\xd3\xe4\x93\x02\x13\x12\x11/v1/managedimages\x12\xca\x01\n\x0fGetManagedImage\x12I.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageRequest\x1aJ.github.com.metaprov.modelaapi.services.catalog.v1.GetManagedimageResponse\" \x82\xd3\xe4\x93\x02\x1a\x12\x18/v1/managedimages/{name}\x12\xc5\x01\n\x10ListMLFrameworks\x12J.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksRequest\x1aK.github.com.metaprov.modelaapi.services.catalog.v1.ListMLFrameworksResponse\"\x18\x82\xd3\xe4\x93\x02\x12\x12\x10/v1/mlframeworks\x12\xc6\x01\n\x0eGetMLFramework\x12H.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkRequest\x1aI.github.com.metaprov.modelaapi.services.catalog.v1.GetMLFrameworkResponse\"\x1f\x82\xd3\xe4\x93\x02\x19\x12\x17/v1/mlframeworks/{name}\x12\xad\x01\n\nListClouds\x12\x44.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsRequest\x1a\x45.github.com.metaprov.modelaapi.services.catalog.v1.ListCloudsResponse\"\x12\x82\xd3\xe4\x93\x02\x0c\x12\n/v1/clouds\x12\xae\x01\n\x08GetCloud\x12\x42.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudRequest\x1a\x43.github.com.metaprov.modelaapi.services.catalog.v1.GetCloudResponse\"\x19\x82\xd3\xe4\x93\x02\x13\x12\x11/v1/clouds/{name}\x12\xd1\x01\n\x13ListWorkloadClasses\x12M.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesRequest\x1aN.github.com.metaprov.modelaapi.services.catalog.v1.ListWorkloadClassesResponse\"\x1b\x82\xd3\xe4\x93\x02\x15\x12\x13/v1/workloadclasses\x12\xcf\x01\n\x10GetWorkloadClass\x12J.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassRequest\x1aK.github.com.metaprov.modelaapi.services.catalog.v1.GetWorkloadClassResponse\"\"\x82\xd3\xe4\x93\x02\x1c\x12\x1a/v1/workloadclasses/{name}\x12\xcc\x01\n\x11ListPublicDataset\x12L.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsRequest\x1aM.github.com.metaprov.modelaapi.services.catalog.v1.ListPublicDatasetsResponse\"\x1a\x82\xd3\xe4\x93\x02\x14\x12\x12/v1/publicdatasets\x12\xce\x01\n\x10GetPublicDataset\x12J.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetRequest\x1aK.github.com.metaprov.modelaapi.services.catalog.v1.GetPublicDatasetResponse\"!\x82\xd3\xe4\x93\x02\x1b\x12\x19/v1/publicdatasets/{name}\x12\xe6\x01\n\x15\x44ownloadPublicDataset\x12O.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetRequest\x1aP.github.com.metaprov.modelaapi.services.catalog.v1.DownloadPublicDatasetResponse\"*\x82\xd3\xe4\x93\x02$\x12\"/v1/publicdatasets/{name}:download\x12\xe2\x01\n\x14PreviewPublicDataset\x12N.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetRequest\x1aO.github.com.metaprov.modelaapi.services.catalog.v1.PreviewPublicDatasetResponse\")\x82\xd3\xe4\x93\x02#\x12!/v1/publicdatasets/{name}:preview\x12\xe0\x01\n\x14\x41pplyPublicDatasetCR\x12N.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRRequest\x1aO.github.com.metaprov.modelaapi.services.catalog.v1.ApplyPublicDatasetCRResponse\"\'\x82\xd3\xe4\x93\x02!\x12\x1f/v1/publicdatasets/{name}:applyB3Z1github.com/metaprov/modelaapi/services/catalog/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.catalog.v1.catalog_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  _globals['DESCRIPTOR']._options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z1github.com/metaprov/modelaapi/services/catalog/v1'
  _globals['_LISTALGORITHMSREQUEST_LABELSENTRY']._options = None
  _globals['_LISTALGORITHMSREQUEST_LABELSENTRY']._serialized_options = b'8\001'
  _globals['_LISTMANAGEDIMAGESREQUEST_LABELSENTRY']._options = None
  _globals['_LISTMANAGEDIMAGESREQUEST_LABELSENTRY']._serialized_options = b'8\001'
  _globals['_LISTMLFRAMEWORKSREQUEST_LABELSENTRY']._options = None
  _globals['_LISTMLFRAMEWORKSREQUEST_LABELSENTRY']._serialized_options = b'8\001'
  _globals['_LISTCLOUDSREQUEST_LABELSENTRY']._options = None
  _globals['_LISTCLOUDSREQUEST_LABELSENTRY']._serialized_options = b'8\001'
  _globals['_LISTPUBLICDATASETSREQUEST_LABELSENTRY']._options = None
  _globals['_LISTPUBLICDATASETSREQUEST_LABELSENTRY']._serialized_options = b'8\001'
  _globals['_LISTPRETRAINEDMODELSREQUEST_LABELSENTRY']._options = None
  _globals['_LISTPRETRAINEDMODELSREQUEST_LABELSENTRY']._serialized_options = b'8\001'
  _globals['_LISTWORKLOADCLASSESREQUEST_LABELSENTRY']._options = None
  _globals['_LISTWORKLOADCLASSESREQUEST_LABELSENTRY']._serialized_options = b'8\001'
  _globals['_CATALOGSERVICE'].methods_by_name['ListAlgorithm']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['ListAlgorithm']._serialized_options = b'\202\323\344\223\002\020\022\016/v1/algorithms'
  _globals['_CATALOGSERVICE'].methods_by_name['GetAlgorithm']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['GetAlgorithm']._serialized_options = b'\202\323\344\223\002\027\022\025/v1/algorithms/{name}'
  _globals['_CATALOGSERVICE'].methods_by_name['ListManagedImages']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['ListManagedImages']._serialized_options = b'\202\323\344\223\002\023\022\021/v1/managedimages'
  _globals['_CATALOGSERVICE'].methods_by_name['GetManagedImage']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['GetManagedImage']._serialized_options = b'\202\323\344\223\002\032\022\030/v1/managedimages/{name}'
  _globals['_CATALOGSERVICE'].methods_by_name['ListMLFrameworks']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['ListMLFrameworks']._serialized_options = b'\202\323\344\223\002\022\022\020/v1/mlframeworks'
  _globals['_CATALOGSERVICE'].methods_by_name['GetMLFramework']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['GetMLFramework']._serialized_options = b'\202\323\344\223\002\031\022\027/v1/mlframeworks/{name}'
  _globals['_CATALOGSERVICE'].methods_by_name['ListClouds']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['ListClouds']._serialized_options = b'\202\323\344\223\002\014\022\n/v1/clouds'
  _globals['_CATALOGSERVICE'].methods_by_name['GetCloud']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['GetCloud']._serialized_options = b'\202\323\344\223\002\023\022\021/v1/clouds/{name}'
  _globals['_CATALOGSERVICE'].methods_by_name['ListWorkloadClasses']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['ListWorkloadClasses']._serialized_options = b'\202\323\344\223\002\025\022\023/v1/workloadclasses'
  _globals['_CATALOGSERVICE'].methods_by_name['GetWorkloadClass']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['GetWorkloadClass']._serialized_options = b'\202\323\344\223\002\034\022\032/v1/workloadclasses/{name}'
  _globals['_CATALOGSERVICE'].methods_by_name['ListPublicDataset']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['ListPublicDataset']._serialized_options = b'\202\323\344\223\002\024\022\022/v1/publicdatasets'
  _globals['_CATALOGSERVICE'].methods_by_name['GetPublicDataset']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['GetPublicDataset']._serialized_options = b'\202\323\344\223\002\033\022\031/v1/publicdatasets/{name}'
  _globals['_CATALOGSERVICE'].methods_by_name['DownloadPublicDataset']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['DownloadPublicDataset']._serialized_options = b'\202\323\344\223\002$\022\"/v1/publicdatasets/{name}:download'
  _globals['_CATALOGSERVICE'].methods_by_name['PreviewPublicDataset']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['PreviewPublicDataset']._serialized_options = b'\202\323\344\223\002#\022!/v1/publicdatasets/{name}:preview'
  _globals['_CATALOGSERVICE'].methods_by_name['ApplyPublicDatasetCR']._options = None
  _globals['_CATALOGSERVICE'].methods_by_name['ApplyPublicDatasetCR']._serialized_options = b'\202\323\344\223\002!\022\037/v1/publicdatasets/{name}:apply'
  _globals['_LISTALGORITHMSREQUEST']._serialized_start=256
  _globals['_LISTALGORITHMSREQUEST']._serialized_end=447
  _globals['_LISTALGORITHMSREQUEST_LABELSENTRY']._serialized_start=402
  _globals['_LISTALGORITHMSREQUEST_LABELSENTRY']._serialized_end=447
  _globals['_LISTALGORITHMSRESPONSE']._serialized_start=449
  _globals['_LISTALGORITHMSRESPONSE']._serialized_end=565
  _globals['_GETALGORITHMREQUEST']._serialized_start=567
  _globals['_GETALGORITHMREQUEST']._serialized_end=621
  _globals['_GETALGORITHMRESPONSE']._serialized_start=623
  _globals['_GETALGORITHMRESPONSE']._serialized_end=732
  _globals['_LISTMANAGEDIMAGESREQUEST']._serialized_start=735
  _globals['_LISTMANAGEDIMAGESREQUEST']._serialized_end=932
  _globals['_LISTMANAGEDIMAGESREQUEST_LABELSENTRY']._serialized_start=402
  _globals['_LISTMANAGEDIMAGESREQUEST_LABELSENTRY']._serialized_end=447
  _globals['_LISTMANAGEDIMAGESRESPONSE']._serialized_start=934
  _globals['_LISTMANAGEDIMAGESRESPONSE']._serialized_end=1059
  _globals['_GETMANAGEDIMAGEREQUEST']._serialized_start=1061
  _globals['_GETMANAGEDIMAGEREQUEST']._serialized_end=1118
  _globals['_GETMANAGEDIMAGERESPONSE']._serialized_start=1120
  _globals['_GETMANAGEDIMAGERESPONSE']._serialized_end=1237
  _globals['_LISTMLFRAMEWORKSREQUEST']._serialized_start=1240
  _globals['_LISTMLFRAMEWORKSREQUEST']._serialized_end=1435
  _globals['_LISTMLFRAMEWORKSREQUEST_LABELSENTRY']._serialized_start=402
  _globals['_LISTMLFRAMEWORKSREQUEST_LABELSENTRY']._serialized_end=447
  _globals['_LISTMLFRAMEWORKSRESPONSE']._serialized_start=1437
  _globals['_LISTMLFRAMEWORKSRESPONSE']._serialized_end=1559
  _globals['_GETMLFRAMEWORKREQUEST']._serialized_start=1561
  _globals['_GETMLFRAMEWORKREQUEST']._serialized_end=1617
  _globals['_GETMLFRAMEWORKRESPONSE']._serialized_start=1619
  _globals['_GETMLFRAMEWORKRESPONSE']._serialized_end=1734
  _globals['_LISTCLOUDSREQUEST']._serialized_start=1737
  _globals['_LISTCLOUDSREQUEST']._serialized_end=1920
  _globals['_LISTCLOUDSREQUEST_LABELSENTRY']._serialized_start=402
  _globals['_LISTCLOUDSREQUEST_LABELSENTRY']._serialized_end=447
  _globals['_LISTCLOUDSRESPONSE']._serialized_start=1922
  _globals['_LISTCLOUDSRESPONSE']._serialized_end=2026
  _globals['_GETCLOUDREQUEST']._serialized_start=2028
  _globals['_GETCLOUDREQUEST']._serialized_end=2078
  _globals['_GETCLOUDRESPONSE']._serialized_start=2080
  _globals['_GETCLOUDRESPONSE']._serialized_end=2177
  _globals['_LISTPUBLICDATASETSREQUEST']._serialized_start=2180
  _globals['_LISTPUBLICDATASETSREQUEST']._serialized_end=2379
  _globals['_LISTPUBLICDATASETSREQUEST_LABELSENTRY']._serialized_start=402
  _globals['_LISTPUBLICDATASETSREQUEST_LABELSENTRY']._serialized_end=447
  _globals['_LISTPUBLICDATASETSRESPONSE']._serialized_start=2382
  _globals['_LISTPUBLICDATASETSRESPONSE']._serialized_end=2510
  _globals['_GETPUBLICDATASETREQUEST']._serialized_start=2512
  _globals['_GETPUBLICDATASETREQUEST']._serialized_end=2570
  _globals['_GETPUBLICDATASETRESPONSE']._serialized_start=2572
  _globals['_GETPUBLICDATASETRESPONSE']._serialized_end=2693
  _globals['_DOWNLOADPUBLICDATASETREQUEST']._serialized_start=2695
  _globals['_DOWNLOADPUBLICDATASETREQUEST']._serialized_end=2758
  _globals['_DOWNLOADPUBLICDATASETRESPONSE']._serialized_start=2760
  _globals['_DOWNLOADPUBLICDATASETRESPONSE']._serialized_end=2804
  _globals['_PREVIEWPUBLICDATASETREQUEST']._serialized_start=2806
  _globals['_PREVIEWPUBLICDATASETREQUEST']._serialized_end=2868
  _globals['_PREVIEWPUBLICDATASETRESPONSE']._serialized_start=2870
  _globals['_PREVIEWPUBLICDATASETRESPONSE']._serialized_end=2913
  _globals['_APPLYPUBLICDATASETCRREQUEST']._serialized_start=2915
  _globals['_APPLYPUBLICDATASETCRREQUEST']._serialized_end=2993
  _globals['_APPLYPUBLICDATASETCRRESPONSE']._serialized_start=2995
  _globals['_APPLYPUBLICDATASETCRRESPONSE']._serialized_end=3038
  _globals['_LISTPRETRAINEDMODELSREQUEST']._serialized_start=3041
  _globals['_LISTPRETRAINEDMODELSREQUEST']._serialized_end=3244
  _globals['_LISTPRETRAINEDMODELSREQUEST_LABELSENTRY']._serialized_start=402
  _globals['_LISTPRETRAINEDMODELSREQUEST_LABELSENTRY']._serialized_end=447
  _globals['_LISTPRETRAINEDMODELSRESPONSE']._serialized_start=3247
  _globals['_LISTPRETRAINEDMODELSRESPONSE']._serialized_end=3381
  _globals['_GETPRETRAINEDMODELREQUEST']._serialized_start=3383
  _globals['_GETPRETRAINEDMODELREQUEST']._serialized_end=3443
  _globals['_GETPRETRAINEDMODELRESPONSE']._serialized_start=3445
  _globals['_GETPRETRAINEDMODELRESPONSE']._serialized_end=3572
  _globals['_LISTWORKLOADCLASSESREQUEST']._serialized_start=3575
  _globals['_LISTWORKLOADCLASSESREQUEST']._serialized_end=3776
  _globals['_LISTWORKLOADCLASSESREQUEST_LABELSENTRY']._serialized_start=402
  _globals['_LISTWORKLOADCLASSESREQUEST_LABELSENTRY']._serialized_end=447
  _globals['_LISTWORKLOADCLASSESRESPONSE']._serialized_start=3778
  _globals['_LISTWORKLOADCLASSESRESPONSE']._serialized_end=3902
  _globals['_GETWORKLOADCLASSREQUEST']._serialized_start=3904
  _globals['_GETWORKLOADCLASSREQUEST']._serialized_end=3962
  _globals['_GETWORKLOADCLASSRESPONSE']._serialized_start=3964
  _globals['_GETWORKLOADCLASSRESPONSE']._serialized_end=4080
  _globals['_CATALOGSERVICE']._serialized_start=4083
  _globals['_CATALOGSERVICE']._serialized_end=7173
# @@protoc_insertion_point(module_scope)
