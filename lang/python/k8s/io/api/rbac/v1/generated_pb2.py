# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: k8s.io/api/rbac/v1/generated.proto
# Protobuf Python Version: 4.25.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2
from k8s.io.apimachinery.pkg.runtime import generated_pb2 as k8s_dot_io_dot_apimachinery_dot_pkg_dot_runtime_dot_generated__pb2
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as k8s_dot_io_dot_apimachinery_dot_pkg_dot_runtime_dot_schema_dot_generated__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\"k8s.io/api/rbac/v1/generated.proto\x12\x12k8s.io.api.rbac.v1\x1a\x34k8s.io/apimachinery/pkg/apis/meta/v1/generated.proto\x1a/k8s.io/apimachinery/pkg/runtime/generated.proto\x1a\x36k8s.io/apimachinery/pkg/runtime/schema/generated.proto\"d\n\x0f\x41ggregationRule\x12Q\n\x14\x63lusterRoleSelectors\x18\x01 \x03(\x0b\x32\x33.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector\"\xbe\x01\n\x0b\x43lusterRole\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12-\n\x05rules\x18\x02 \x03(\x0b\x32\x1e.k8s.io.api.rbac.v1.PolicyRule\x12<\n\x0f\x61ggregationRule\x18\x03 \x01(\x0b\x32#.k8s.io.api.rbac.v1.AggregationRule\"\xb5\x01\n\x12\x43lusterRoleBinding\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12-\n\x08subjects\x18\x02 \x03(\x0b\x32\x1b.k8s.io.api.rbac.v1.Subject\x12,\n\x07roleRef\x18\x03 \x01(\x0b\x32\x1b.k8s.io.api.rbac.v1.RoleRef\"\x91\x01\n\x16\x43lusterRoleBindingList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12\x35\n\x05items\x18\x02 \x03(\x0b\x32&.k8s.io.api.rbac.v1.ClusterRoleBinding\"\x83\x01\n\x0f\x43lusterRoleList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12.\n\x05items\x18\x02 \x03(\x0b\x32\x1f.k8s.io.api.rbac.v1.ClusterRole\"q\n\nPolicyRule\x12\r\n\x05verbs\x18\x01 \x03(\t\x12\x11\n\tapiGroups\x18\x02 \x03(\t\x12\x11\n\tresources\x18\x03 \x03(\t\x12\x15\n\rresourceNames\x18\x04 \x03(\t\x12\x17\n\x0fnonResourceURLs\x18\x05 \x03(\t\"y\n\x04Role\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12-\n\x05rules\x18\x02 \x03(\x0b\x32\x1e.k8s.io.api.rbac.v1.PolicyRule\"\xae\x01\n\x0bRoleBinding\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12-\n\x08subjects\x18\x02 \x03(\x0b\x32\x1b.k8s.io.api.rbac.v1.Subject\x12,\n\x07roleRef\x18\x03 \x01(\x0b\x32\x1b.k8s.io.api.rbac.v1.RoleRef\"\x83\x01\n\x0fRoleBindingList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12.\n\x05items\x18\x02 \x03(\x0b\x32\x1f.k8s.io.api.rbac.v1.RoleBinding\"u\n\x08RoleList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12\'\n\x05items\x18\x02 \x03(\x0b\x32\x18.k8s.io.api.rbac.v1.Role\"7\n\x07RoleRef\x12\x10\n\x08\x61piGroup\x18\x01 \x01(\t\x12\x0c\n\x04kind\x18\x02 \x01(\t\x12\x0c\n\x04name\x18\x03 \x01(\t\"J\n\x07Subject\x12\x0c\n\x04kind\x18\x01 \x01(\t\x12\x10\n\x08\x61piGroup\x18\x02 \x01(\t\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x11\n\tnamespace\x18\x04 \x01(\tB\x14Z\x12k8s.io/api/rbac/v1')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'k8s.io.api.rbac.v1.generated_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  _globals['DESCRIPTOR']._options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z\022k8s.io/api/rbac/v1'
  _globals['_AGGREGATIONRULE']._serialized_start=217
  _globals['_AGGREGATIONRULE']._serialized_end=317
  _globals['_CLUSTERROLE']._serialized_start=320
  _globals['_CLUSTERROLE']._serialized_end=510
  _globals['_CLUSTERROLEBINDING']._serialized_start=513
  _globals['_CLUSTERROLEBINDING']._serialized_end=694
  _globals['_CLUSTERROLEBINDINGLIST']._serialized_start=697
  _globals['_CLUSTERROLEBINDINGLIST']._serialized_end=842
  _globals['_CLUSTERROLELIST']._serialized_start=845
  _globals['_CLUSTERROLELIST']._serialized_end=976
  _globals['_POLICYRULE']._serialized_start=978
  _globals['_POLICYRULE']._serialized_end=1091
  _globals['_ROLE']._serialized_start=1093
  _globals['_ROLE']._serialized_end=1214
  _globals['_ROLEBINDING']._serialized_start=1217
  _globals['_ROLEBINDING']._serialized_end=1391
  _globals['_ROLEBINDINGLIST']._serialized_start=1394
  _globals['_ROLEBINDINGLIST']._serialized_end=1525
  _globals['_ROLELIST']._serialized_start=1527
  _globals['_ROLELIST']._serialized_end=1644
  _globals['_ROLEREF']._serialized_start=1646
  _globals['_ROLEREF']._serialized_end=1701
  _globals['_SUBJECT']._serialized_start=1703
  _globals['_SUBJECT']._serialized_end=1777
# @@protoc_insertion_point(module_scope)
