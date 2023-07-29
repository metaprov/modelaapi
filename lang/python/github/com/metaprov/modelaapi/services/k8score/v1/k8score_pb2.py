# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/k8score/v1/k8score.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2
from k8s.io.api.core.v1 import generated_pb2 as k8s_dot_io_dot_api_dot_core_dot_v1_dot_generated__pb2
from k8s.io.api.apps.v1 import generated_pb2 as k8s_dot_io_dot_api_dot_apps_dot_v1_dot_generated__pb2
from k8s.io.api.rbac.v1 import generated_pb2 as k8s_dot_io_dot_api_dot_rbac_dot_v1_dot_generated__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n?github.com/metaprov/modelaapi/services/k8score/v1/k8score.proto\x12\x31github.com.metaprov.modelaapi.services.k8score.v1\x1a\x34k8s.io/apimachinery/pkg/apis/meta/v1/generated.proto\x1a\"k8s.io/api/core/v1/generated.proto\x1a\"k8s.io/api/apps/v1/generated.proto\x1a\"k8s.io/api/rbac/v1/generated.proto\x1a\x1cgoogle/api/annotations.proto\"\xc3\x01\n\x10GetSecretRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12_\n\x06labels\x18\x03 \x03(\x0b\x32O.github.com.metaprov.modelaapi.services.k8score.v1.GetSecretRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"b\n\x11GetSecretResponse\x12M\n\x06secret\x18\x01 \x01(\x0b\x32=.github.com.metaprov.modelaapi.services.k8score.v1.SecretInfo\"\xb9\x01\n\x12ListSecretsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x61\n\x06labels\x18\x03 \x03(\x0b\x32Q.github.com.metaprov.modelaapi.services.k8score.v1.ListSecretsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"d\n\x12ListSecretResponse\x12N\n\x07secrets\x18\x01 \x03(\x0b\x32=.github.com.metaprov.modelaapi.services.k8score.v1.SecretInfo\"\xcb\x01\n\x14GetDeploymentRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x63\n\x06labels\x18\x03 \x03(\x0b\x32S.github.com.metaprov.modelaapi.services.k8score.v1.GetDeploymentRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"n\n\x15GetDeploymentResponse\x12U\n\ndeployment\x18\x01 \x01(\x0b\x32\x41.github.com.metaprov.modelaapi.services.k8score.v1.DeploymentInfo\"\xc1\x01\n\x16ListDeploymentsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x65\n\x06labels\x18\x03 \x03(\x0b\x32U.github.com.metaprov.modelaapi.services.k8score.v1.ListDeploymentsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"q\n\x17ListDeploymentsResponse\x12V\n\x0b\x64\x65ployments\x18\x01 \x03(\x0b\x32\x41.github.com.metaprov.modelaapi.services.k8score.v1.DeploymentInfo\"\xc5\x01\n\x11GetServiceRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12`\n\x06labels\x18\x03 \x03(\x0b\x32P.github.com.metaprov.modelaapi.services.k8score.v1.GetServiceRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"e\n\x12GetServiceResponse\x12O\n\x07service\x18\x01 \x01(\x0b\x32>.github.com.metaprov.modelaapi.services.k8score.v1.ServiceInfo\"\xbb\x01\n\x13ListServicesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x62\n\x06labels\x18\x03 \x03(\x0b\x32R.github.com.metaprov.modelaapi.services.k8score.v1.ListServicesRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"h\n\x14ListServicesResponse\x12P\n\x08services\x18\x01 \x03(\x0b\x32>.github.com.metaprov.modelaapi.services.k8score.v1.ServiceInfo\"\xbd\x01\n\rGetPodRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\\\n\x06labels\x18\x03 \x03(\x0b\x32L.github.com.metaprov.modelaapi.services.k8score.v1.GetPodRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"Y\n\x0eGetPodResponse\x12G\n\x03pod\x18\x01 \x01(\x0b\x32:.github.com.metaprov.modelaapi.services.k8score.v1.PodInfo\"\xb3\x01\n\x0fListPodsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12^\n\x06labels\x18\x02 \x03(\x0b\x32N.github.com.metaprov.modelaapi.services.k8score.v1.ListPodsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\\\n\x10ListPodsResponse\x12H\n\x04pods\x18\x01 \x03(\x0b\x32:.github.com.metaprov.modelaapi.services.k8score.v1.PodInfo\"\xbd\x01\n\rGetJobRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\\\n\x06labels\x18\x03 \x03(\x0b\x32L.github.com.metaprov.modelaapi.services.k8score.v1.GetJobRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"Y\n\x0eGetJobResponse\x12G\n\x03job\x18\x01 \x01(\x0b\x32:.github.com.metaprov.modelaapi.services.k8score.v1.JobInfo\"\xc3\x01\n\x0fListJobsRequest\x12\x0e\n\x06tenant\x18\x01 \x01(\t\x12\x11\n\tnamespace\x18\x02 \x01(\t\x12^\n\x06labels\x18\x03 \x03(\x0b\x32N.github.com.metaprov.modelaapi.services.k8score.v1.ListJobsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\\\n\x10ListJobsResponse\x12H\n\x04jobs\x18\x01 \x03(\x0b\x32:.github.com.metaprov.modelaapi.services.k8score.v1.JobInfo\"P\n\x16GetContainerLogRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x15\n\rcontainername\x18\x03 \x01(\t\"&\n\x17GetContainerLogResponse\x12\x0b\n\x03log\x18\x01 \x01(\x0c\"\xc5\x01\n\x11ListEventsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12`\n\x06labels\x18\x03 \x03(\x0b\x32P.github.com.metaprov.modelaapi.services.k8score.v1.ListEventsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"B\n\x12ListEventsResponse\x12,\n\x05items\x18\x01 \x01(\x0b\x32\x1d.k8s.io.api.core.v1.EventList\"-\n\nSecretInfo\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x11\n\tnamespace\x18\x02 \x01(\t\"\xc5\x02\n\x0bServiceInfo\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x11\n\tnamespace\x18\x02 \x01(\t\x12Z\n\x06labels\x18\x03 \x03(\x0b\x32J.github.com.metaprov.modelaapi.services.k8score.v1.ServiceInfo.LabelsEntry\x12\n\n\x02ip\x18\x04 \x01(\t\x12\x0c\n\x04port\x18\x05 \x01(\t\x12=\n\tcreatedAt\x18\x06 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12\x31\n\x06status\x18\x07 \x01(\x0b\x32!.k8s.io.api.core.v1.ServiceStatus\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"9\n\rContainerInfo\x12\r\n\x05image\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0b\n\x03log\x18\x03 \x01(\x0c\"\xfe\x02\n\x0e\x44\x65ploymentInfo\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x11\n\tnamespace\x18\x02 \x01(\t\x12]\n\x06labels\x18\x03 \x03(\x0b\x32M.github.com.metaprov.modelaapi.services.k8score.v1.DeploymentInfo.LabelsEntry\x12=\n\tcreatedAt\x18\x04 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12\x34\n\x06status\x18\x05 \x01(\x0b\x32$.k8s.io.api.apps.v1.DeploymentStatus\x12H\n\x04pods\x18\x06 \x03(\x0b\x32:.github.com.metaprov.modelaapi.services.k8score.v1.PodInfo\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\xf6\x02\n\x07PodInfo\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x11\n\tnamespace\x18\x02 \x01(\t\x12V\n\x06labels\x18\x03 \x03(\x0b\x32\x46.github.com.metaprov.modelaapi.services.k8score.v1.PodInfo.LabelsEntry\x12=\n\tcreatedAt\x18\x04 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12-\n\x06status\x18\x05 \x01(\x0b\x32\x1d.k8s.io.api.core.v1.PodStatus\x12U\n\x0b\x63ontrainers\x18\x06 \x03(\x0b\x32@.github.com.metaprov.modelaapi.services.k8score.v1.ContainerInfo\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\xec\x03\n\x07JobInfo\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x11\n\tnamespace\x18\x02 \x01(\t\x12V\n\x06labels\x18\x03 \x03(\x0b\x32\x46.github.com.metaprov.modelaapi.services.k8score.v1.JobInfo.LabelsEntry\x12=\n\tstartedAt\x18\x04 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12?\n\x0b\x63ompletedAt\x18\x05 \x01(\x0b\x32*.k8s.io.apimachinery.pkg.apis.meta.v1.Time\x12\x0e\n\x06\x66\x61iled\x18\x06 \x01(\x05\x12\x11\n\tsucceeded\x18\x07 \x01(\x05\x12\x0e\n\x06\x61\x63tive\x18\x08 \x01(\x05\x12\r\n\x05ready\x18\t \x01(\x05\x12H\n\x04pods\x18\n \x03(\x0b\x32:.github.com.metaprov.modelaapi.services.k8score.v1.PodInfo\x12\r\n\x05model\x18\x0b \x01(\t\x12\r\n\x05study\x18\x0c \x01(\t\x12\x0f\n\x07\x64\x61taset\x18\r \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x32\xb4\x12\n\x0e\x43oreK8sService\x12\xbf\x01\n\x0eListK8sSecrets\x12\x45.github.com.metaprov.modelaapi.services.k8score.v1.ListSecretsRequest\x1a\x45.github.com.metaprov.modelaapi.services.k8score.v1.ListSecretResponse\"\x1f\x82\xd3\xe4\x93\x02\x19\x12\x17/v1/secrets/{namespace}\x12\xc1\x01\n\x0cGetK8sSecret\x12\x43.github.com.metaprov.modelaapi.services.k8score.v1.GetSecretRequest\x1a\x44.github.com.metaprov.modelaapi.services.k8score.v1.GetSecretResponse\"&\x82\xd3\xe4\x93\x02 \x12\x1e/v1/secrets/{namespace}/{name}\x12\xc4\x01\n\x0fListK8sServices\x12\x46.github.com.metaprov.modelaapi.services.k8score.v1.ListServicesRequest\x1aG.github.com.metaprov.modelaapi.services.k8score.v1.ListServicesResponse\" \x82\xd3\xe4\x93\x02\x1a\x12\x18/v1/services/{namespace}\x12\xc5\x01\n\rGetK8sService\x12\x44.github.com.metaprov.modelaapi.services.k8score.v1.GetServiceRequest\x1a\x45.github.com.metaprov.modelaapi.services.k8score.v1.GetServiceResponse\"\'\x82\xd3\xe4\x93\x02!\x12\x1f/v1/services/{namespace}/{name}\x12\xd0\x01\n\x12ListK8sDeployments\x12I.github.com.metaprov.modelaapi.services.k8score.v1.ListDeploymentsRequest\x1aJ.github.com.metaprov.modelaapi.services.k8score.v1.ListDeploymentsResponse\"#\x82\xd3\xe4\x93\x02\x1d\x12\x1b/v1/deployments/{namespace}\x12\xd1\x01\n\x10GetK8sDeployment\x12G.github.com.metaprov.modelaapi.services.k8score.v1.GetDeploymentRequest\x1aH.github.com.metaprov.modelaapi.services.k8score.v1.GetDeploymentResponse\"*\x82\xd3\xe4\x93\x02$\x12\"/v1/deployments/{namespace}/{name}\x12\xb4\x01\n\x0bListK8sPods\x12\x42.github.com.metaprov.modelaapi.services.k8score.v1.ListPodsRequest\x1a\x43.github.com.metaprov.modelaapi.services.k8score.v1.ListPodsResponse\"\x1c\x82\xd3\xe4\x93\x02\x16\x12\x14/v1/pods/{namespace}\x12\xb5\x01\n\tGetK8sPod\x12@.github.com.metaprov.modelaapi.services.k8score.v1.GetPodRequest\x1a\x41.github.com.metaprov.modelaapi.services.k8score.v1.GetPodResponse\"#\x82\xd3\xe4\x93\x02\x1d\x12\x1b/v1/pods/{namespace}/{name}\x12\xb4\x01\n\x0bListK8sJobs\x12\x42.github.com.metaprov.modelaapi.services.k8score.v1.ListJobsRequest\x1a\x43.github.com.metaprov.modelaapi.services.k8score.v1.ListJobsResponse\"\x1c\x82\xd3\xe4\x93\x02\x16\x12\x14/v1/jobs/{namespace}\x12\xb5\x01\n\tGetK8sJob\x12@.github.com.metaprov.modelaapi.services.k8score.v1.GetJobRequest\x1a\x41.github.com.metaprov.modelaapi.services.k8score.v1.GetJobResponse\"#\x82\xd3\xe4\x93\x02\x1d\x12\x1b/v1/jobs/{namespace}/{name}\x12\xb9\x01\n\nListEvents\x12\x44.github.com.metaprov.modelaapi.services.k8score.v1.ListEventsRequest\x1a\x45.github.com.metaprov.modelaapi.services.k8score.v1.ListEventsResponse\"\x1e\x82\xd3\xe4\x93\x02\x18\x12\x16/v1/events/{namespace}\x12\xcb\x01\n\x0fGetContainerLog\x12I.github.com.metaprov.modelaapi.services.k8score.v1.GetContainerLogRequest\x1aJ.github.com.metaprov.modelaapi.services.k8score.v1.GetContainerLogResponse\"!\x82\xd3\xe4\x93\x02\x1b\x12\x19/v1/pods/{namespace}:logsB3Z1github.com/metaprov/modelaapi/services/k8score/v1b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.k8score.v1.k8score_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z1github.com/metaprov/modelaapi/services/k8score/v1'
  _GETSECRETREQUEST_LABELSENTRY._options = None
  _GETSECRETREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _LISTSECRETSREQUEST_LABELSENTRY._options = None
  _LISTSECRETSREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _GETDEPLOYMENTREQUEST_LABELSENTRY._options = None
  _GETDEPLOYMENTREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _LISTDEPLOYMENTSREQUEST_LABELSENTRY._options = None
  _LISTDEPLOYMENTSREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _GETSERVICEREQUEST_LABELSENTRY._options = None
  _GETSERVICEREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _LISTSERVICESREQUEST_LABELSENTRY._options = None
  _LISTSERVICESREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _GETPODREQUEST_LABELSENTRY._options = None
  _GETPODREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _LISTPODSREQUEST_LABELSENTRY._options = None
  _LISTPODSREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _GETJOBREQUEST_LABELSENTRY._options = None
  _GETJOBREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _LISTJOBSREQUEST_LABELSENTRY._options = None
  _LISTJOBSREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _LISTEVENTSREQUEST_LABELSENTRY._options = None
  _LISTEVENTSREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _SERVICEINFO_LABELSENTRY._options = None
  _SERVICEINFO_LABELSENTRY._serialized_options = b'8\001'
  _DEPLOYMENTINFO_LABELSENTRY._options = None
  _DEPLOYMENTINFO_LABELSENTRY._serialized_options = b'8\001'
  _PODINFO_LABELSENTRY._options = None
  _PODINFO_LABELSENTRY._serialized_options = b'8\001'
  _JOBINFO_LABELSENTRY._options = None
  _JOBINFO_LABELSENTRY._serialized_options = b'8\001'
  _COREK8SSERVICE.methods_by_name['ListK8sSecrets']._options = None
  _COREK8SSERVICE.methods_by_name['ListK8sSecrets']._serialized_options = b'\202\323\344\223\002\031\022\027/v1/secrets/{namespace}'
  _COREK8SSERVICE.methods_by_name['GetK8sSecret']._options = None
  _COREK8SSERVICE.methods_by_name['GetK8sSecret']._serialized_options = b'\202\323\344\223\002 \022\036/v1/secrets/{namespace}/{name}'
  _COREK8SSERVICE.methods_by_name['ListK8sServices']._options = None
  _COREK8SSERVICE.methods_by_name['ListK8sServices']._serialized_options = b'\202\323\344\223\002\032\022\030/v1/services/{namespace}'
  _COREK8SSERVICE.methods_by_name['GetK8sService']._options = None
  _COREK8SSERVICE.methods_by_name['GetK8sService']._serialized_options = b'\202\323\344\223\002!\022\037/v1/services/{namespace}/{name}'
  _COREK8SSERVICE.methods_by_name['ListK8sDeployments']._options = None
  _COREK8SSERVICE.methods_by_name['ListK8sDeployments']._serialized_options = b'\202\323\344\223\002\035\022\033/v1/deployments/{namespace}'
  _COREK8SSERVICE.methods_by_name['GetK8sDeployment']._options = None
  _COREK8SSERVICE.methods_by_name['GetK8sDeployment']._serialized_options = b'\202\323\344\223\002$\022\"/v1/deployments/{namespace}/{name}'
  _COREK8SSERVICE.methods_by_name['ListK8sPods']._options = None
  _COREK8SSERVICE.methods_by_name['ListK8sPods']._serialized_options = b'\202\323\344\223\002\026\022\024/v1/pods/{namespace}'
  _COREK8SSERVICE.methods_by_name['GetK8sPod']._options = None
  _COREK8SSERVICE.methods_by_name['GetK8sPod']._serialized_options = b'\202\323\344\223\002\035\022\033/v1/pods/{namespace}/{name}'
  _COREK8SSERVICE.methods_by_name['ListK8sJobs']._options = None
  _COREK8SSERVICE.methods_by_name['ListK8sJobs']._serialized_options = b'\202\323\344\223\002\026\022\024/v1/jobs/{namespace}'
  _COREK8SSERVICE.methods_by_name['GetK8sJob']._options = None
  _COREK8SSERVICE.methods_by_name['GetK8sJob']._serialized_options = b'\202\323\344\223\002\035\022\033/v1/jobs/{namespace}/{name}'
  _COREK8SSERVICE.methods_by_name['ListEvents']._options = None
  _COREK8SSERVICE.methods_by_name['ListEvents']._serialized_options = b'\202\323\344\223\002\030\022\026/v1/events/{namespace}'
  _COREK8SSERVICE.methods_by_name['GetContainerLog']._options = None
  _COREK8SSERVICE.methods_by_name['GetContainerLog']._serialized_options = b'\202\323\344\223\002\033\022\031/v1/pods/{namespace}:logs'
  _GETSECRETREQUEST._serialized_start=311
  _GETSECRETREQUEST._serialized_end=506
  _GETSECRETREQUEST_LABELSENTRY._serialized_start=461
  _GETSECRETREQUEST_LABELSENTRY._serialized_end=506
  _GETSECRETRESPONSE._serialized_start=508
  _GETSECRETRESPONSE._serialized_end=606
  _LISTSECRETSREQUEST._serialized_start=609
  _LISTSECRETSREQUEST._serialized_end=794
  _LISTSECRETSREQUEST_LABELSENTRY._serialized_start=461
  _LISTSECRETSREQUEST_LABELSENTRY._serialized_end=506
  _LISTSECRETRESPONSE._serialized_start=796
  _LISTSECRETRESPONSE._serialized_end=896
  _GETDEPLOYMENTREQUEST._serialized_start=899
  _GETDEPLOYMENTREQUEST._serialized_end=1102
  _GETDEPLOYMENTREQUEST_LABELSENTRY._serialized_start=461
  _GETDEPLOYMENTREQUEST_LABELSENTRY._serialized_end=506
  _GETDEPLOYMENTRESPONSE._serialized_start=1104
  _GETDEPLOYMENTRESPONSE._serialized_end=1214
  _LISTDEPLOYMENTSREQUEST._serialized_start=1217
  _LISTDEPLOYMENTSREQUEST._serialized_end=1410
  _LISTDEPLOYMENTSREQUEST_LABELSENTRY._serialized_start=461
  _LISTDEPLOYMENTSREQUEST_LABELSENTRY._serialized_end=506
  _LISTDEPLOYMENTSRESPONSE._serialized_start=1412
  _LISTDEPLOYMENTSRESPONSE._serialized_end=1525
  _GETSERVICEREQUEST._serialized_start=1528
  _GETSERVICEREQUEST._serialized_end=1725
  _GETSERVICEREQUEST_LABELSENTRY._serialized_start=461
  _GETSERVICEREQUEST_LABELSENTRY._serialized_end=506
  _GETSERVICERESPONSE._serialized_start=1727
  _GETSERVICERESPONSE._serialized_end=1828
  _LISTSERVICESREQUEST._serialized_start=1831
  _LISTSERVICESREQUEST._serialized_end=2018
  _LISTSERVICESREQUEST_LABELSENTRY._serialized_start=461
  _LISTSERVICESREQUEST_LABELSENTRY._serialized_end=506
  _LISTSERVICESRESPONSE._serialized_start=2020
  _LISTSERVICESRESPONSE._serialized_end=2124
  _GETPODREQUEST._serialized_start=2127
  _GETPODREQUEST._serialized_end=2316
  _GETPODREQUEST_LABELSENTRY._serialized_start=461
  _GETPODREQUEST_LABELSENTRY._serialized_end=506
  _GETPODRESPONSE._serialized_start=2318
  _GETPODRESPONSE._serialized_end=2407
  _LISTPODSREQUEST._serialized_start=2410
  _LISTPODSREQUEST._serialized_end=2589
  _LISTPODSREQUEST_LABELSENTRY._serialized_start=461
  _LISTPODSREQUEST_LABELSENTRY._serialized_end=506
  _LISTPODSRESPONSE._serialized_start=2591
  _LISTPODSRESPONSE._serialized_end=2683
  _GETJOBREQUEST._serialized_start=2686
  _GETJOBREQUEST._serialized_end=2875
  _GETJOBREQUEST_LABELSENTRY._serialized_start=461
  _GETJOBREQUEST_LABELSENTRY._serialized_end=506
  _GETJOBRESPONSE._serialized_start=2877
  _GETJOBRESPONSE._serialized_end=2966
  _LISTJOBSREQUEST._serialized_start=2969
  _LISTJOBSREQUEST._serialized_end=3164
  _LISTJOBSREQUEST_LABELSENTRY._serialized_start=461
  _LISTJOBSREQUEST_LABELSENTRY._serialized_end=506
  _LISTJOBSRESPONSE._serialized_start=3166
  _LISTJOBSRESPONSE._serialized_end=3258
  _GETCONTAINERLOGREQUEST._serialized_start=3260
  _GETCONTAINERLOGREQUEST._serialized_end=3340
  _GETCONTAINERLOGRESPONSE._serialized_start=3342
  _GETCONTAINERLOGRESPONSE._serialized_end=3380
  _LISTEVENTSREQUEST._serialized_start=3383
  _LISTEVENTSREQUEST._serialized_end=3580
  _LISTEVENTSREQUEST_LABELSENTRY._serialized_start=461
  _LISTEVENTSREQUEST_LABELSENTRY._serialized_end=506
  _LISTEVENTSRESPONSE._serialized_start=3582
  _LISTEVENTSRESPONSE._serialized_end=3648
  _SECRETINFO._serialized_start=3650
  _SECRETINFO._serialized_end=3695
  _SERVICEINFO._serialized_start=3698
  _SERVICEINFO._serialized_end=4023
  _SERVICEINFO_LABELSENTRY._serialized_start=461
  _SERVICEINFO_LABELSENTRY._serialized_end=506
  _CONTAINERINFO._serialized_start=4025
  _CONTAINERINFO._serialized_end=4082
  _DEPLOYMENTINFO._serialized_start=4085
  _DEPLOYMENTINFO._serialized_end=4467
  _DEPLOYMENTINFO_LABELSENTRY._serialized_start=461
  _DEPLOYMENTINFO_LABELSENTRY._serialized_end=506
  _PODINFO._serialized_start=4470
  _PODINFO._serialized_end=4844
  _PODINFO_LABELSENTRY._serialized_start=461
  _PODINFO_LABELSENTRY._serialized_end=506
  _JOBINFO._serialized_start=4847
  _JOBINFO._serialized_end=5339
  _JOBINFO_LABELSENTRY._serialized_start=461
  _JOBINFO_LABELSENTRY._serialized_end=506
  _COREK8SSERVICE._serialized_start=5342
  _COREK8SSERVICE._serialized_end=7698
# @@protoc_insertion_point(module_scope)
