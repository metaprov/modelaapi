# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/notifier/v1/notifier.proto
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
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nAgithub.com/metaprov/modelaapi/services/notifier/v1/notifier.proto\x12\x32github.com.metaprov.modelaapi.services.notifier.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"\xf7\x01\n\x14ListNotifiersRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x64\n\x06labels\x18\x02 \x03(\x0b\x32T.github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x88\x01\n\x15ListNotifiersResponse\x12V\n\tnotifiers\x18\x01 \x01(\x0b\x32\x43.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.NotifierList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"\x12\n\x10NotifierResponse\"j\n\x15\x43reateNotifierRequest\x12Q\n\x08notifier\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier\"\x18\n\x16\x43reateNotifierResponse\"\x9a\x01\n\x15UpdateNotifierRequest\x12Q\n\x08notifier\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x18\n\x16UpdateNotifierResponse\"5\n\x12GetNotifierRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"v\n\x13GetNotifierResponse\x12Q\n\x08notifier\x18\x01 \x01(\x0b\x32?.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Notifier\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"8\n\x15\x44\x65leteNotifierRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x18\n\x16\x44\x65leteNotifierResponse2\xb9\x08\n\x0fNotifierService\x12\xc7\x01\n\rListNotifiers\x12H.github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersRequest\x1aI.github.com.metaprov.modelaapi.services.notifier.v1.ListNotifiersResponse\"!\x82\xd3\xe4\x93\x02\x1b\x12\x19/v1/notifiers/{namespace}\x12\xc1\x01\n\x0e\x43reateNotifier\x12I.github.com.metaprov.modelaapi.services.notifier.v1.CreateNotifierRequest\x1aJ.github.com.metaprov.modelaapi.services.notifier.v1.CreateNotifierResponse\"\x18\x82\xd3\xe4\x93\x02\x12\"\r/v1/notifiers:\x01*\x12\xc8\x01\n\x0bGetNotifier\x12\x46.github.com.metaprov.modelaapi.services.notifier.v1.GetNotifierRequest\x1aG.github.com.metaprov.modelaapi.services.notifier.v1.GetNotifierResponse\"(\x82\xd3\xe4\x93\x02\"\x12 /v1/notifiers/{namespace}/{name}\x12\xf8\x01\n\x0eUpdateNotifier\x12I.github.com.metaprov.modelaapi.services.notifier.v1.UpdateNotifierRequest\x1aJ.github.com.metaprov.modelaapi.services.notifier.v1.UpdateNotifierResponse\"O\x82\xd3\xe4\x93\x02I\x1a\x44/v1/notifiers/{notifier.metadata.namespace}/{notifier.metadata.name}:\x01*\x12\xd1\x01\n\x0e\x44\x65leteNotifier\x12I.github.com.metaprov.modelaapi.services.notifier.v1.DeleteNotifierRequest\x1aJ.github.com.metaprov.modelaapi.services.notifier.v1.DeleteNotifierResponse\"(\x82\xd3\xe4\x93\x02\"* /v1/notifiers/{namespace}/{name}B4Z2github.com/metaprov/modelaapi/services/notifier/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.notifier.v1.notifier_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  _globals['DESCRIPTOR']._options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z2github.com/metaprov/modelaapi/services/notifier/v1'
  _globals['_LISTNOTIFIERSREQUEST_LABELSENTRY']._options = None
  _globals['_LISTNOTIFIERSREQUEST_LABELSENTRY']._serialized_options = b'8\001'
  _globals['_NOTIFIERSERVICE'].methods_by_name['ListNotifiers']._options = None
  _globals['_NOTIFIERSERVICE'].methods_by_name['ListNotifiers']._serialized_options = b'\202\323\344\223\002\033\022\031/v1/notifiers/{namespace}'
  _globals['_NOTIFIERSERVICE'].methods_by_name['CreateNotifier']._options = None
  _globals['_NOTIFIERSERVICE'].methods_by_name['CreateNotifier']._serialized_options = b'\202\323\344\223\002\022\"\r/v1/notifiers:\001*'
  _globals['_NOTIFIERSERVICE'].methods_by_name['GetNotifier']._options = None
  _globals['_NOTIFIERSERVICE'].methods_by_name['GetNotifier']._serialized_options = b'\202\323\344\223\002\"\022 /v1/notifiers/{namespace}/{name}'
  _globals['_NOTIFIERSERVICE'].methods_by_name['UpdateNotifier']._options = None
  _globals['_NOTIFIERSERVICE'].methods_by_name['UpdateNotifier']._serialized_options = b'\202\323\344\223\002I\032D/v1/notifiers/{notifier.metadata.namespace}/{notifier.metadata.name}:\001*'
  _globals['_NOTIFIERSERVICE'].methods_by_name['DeleteNotifier']._options = None
  _globals['_NOTIFIERSERVICE'].methods_by_name['DeleteNotifier']._serialized_options = b'\202\323\344\223\002\"* /v1/notifiers/{namespace}/{name}'
  _globals['_LISTNOTIFIERSREQUEST']._serialized_start=320
  _globals['_LISTNOTIFIERSREQUEST']._serialized_end=567
  _globals['_LISTNOTIFIERSREQUEST_LABELSENTRY']._serialized_start=522
  _globals['_LISTNOTIFIERSREQUEST_LABELSENTRY']._serialized_end=567
  _globals['_LISTNOTIFIERSRESPONSE']._serialized_start=570
  _globals['_LISTNOTIFIERSRESPONSE']._serialized_end=706
  _globals['_NOTIFIERRESPONSE']._serialized_start=708
  _globals['_NOTIFIERRESPONSE']._serialized_end=726
  _globals['_CREATENOTIFIERREQUEST']._serialized_start=728
  _globals['_CREATENOTIFIERREQUEST']._serialized_end=834
  _globals['_CREATENOTIFIERRESPONSE']._serialized_start=836
  _globals['_CREATENOTIFIERRESPONSE']._serialized_end=860
  _globals['_UPDATENOTIFIERREQUEST']._serialized_start=863
  _globals['_UPDATENOTIFIERREQUEST']._serialized_end=1017
  _globals['_UPDATENOTIFIERRESPONSE']._serialized_start=1019
  _globals['_UPDATENOTIFIERRESPONSE']._serialized_end=1043
  _globals['_GETNOTIFIERREQUEST']._serialized_start=1045
  _globals['_GETNOTIFIERREQUEST']._serialized_end=1098
  _globals['_GETNOTIFIERRESPONSE']._serialized_start=1100
  _globals['_GETNOTIFIERRESPONSE']._serialized_end=1218
  _globals['_DELETENOTIFIERREQUEST']._serialized_start=1220
  _globals['_DELETENOTIFIERREQUEST']._serialized_end=1276
  _globals['_DELETENOTIFIERRESPONSE']._serialized_start=1278
  _globals['_DELETENOTIFIERRESPONSE']._serialized_end=1302
  _globals['_NOTIFIERSERVICE']._serialized_start=1305
  _globals['_NOTIFIERSERVICE']._serialized_end=2386
# @@protoc_insertion_point(module_scope)
