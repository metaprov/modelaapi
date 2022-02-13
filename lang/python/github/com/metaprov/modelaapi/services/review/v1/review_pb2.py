# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/review/v1/review.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modelaapi/services/review/v1/review.proto',
  package='github.com.metaprov.modelaapi.services.review.v1',
  syntax='proto3',
  serialized_options=b'Z0github.com/metaprov/modelaapi/services/review/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n=github.com/metaprov/modelaapi/services/review/v1/review.proto\x12\x30github.com.metaprov.modelaapi.services.review.v1\x1a google/protobuf/field_mask.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/team/v1alpha1/generated.proto\x1a\x1cgoogle/api/annotations.proto\"\xc2\x01\n\x10GetReviewRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12^\n\x06labels\x18\x03 \x03(\x0b\x32N.github.com.metaprov.modelaapi.services.review.v1.GetReviewRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"o\n\x11GetReviewResponse\x12L\n\x06review\x18\x01 \x01(\x0b\x32<.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.Review\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"c\n\x13\x43reateReviewRequest\x12L\n\x06review\x18\x01 \x01(\x0b\x32<.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.Review\"\x16\n\x14\x43reateReviewResponse\"\x93\x01\n\x13UpdateReviewRequest\x12L\n\x06review\x18\x01 \x01(\x0b\x32<.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.Review\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x16\n\x14UpdateReviewResponse\"\xc8\x01\n\x13\x44\x65leteReviewRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x61\n\x06labels\x18\x03 \x03(\x0b\x32Q.github.com.metaprov.modelaapi.services.review.v1.DeleteReviewRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x16\n\x14\x44\x65leteReviewResponse\"\xdd\x01\n\x11ListReviewRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12_\n\x06labels\x18\x02 \x03(\x0b\x32O.github.com.metaprov.modelaapi.services.review.v1.ListReviewRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x81\x01\n\x12ListReviewResponse\x12R\n\x08reviewes\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.ReviewList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t2\xf1\x07\n\rReviewService\x12\xb9\x01\n\x0bListReviews\x12\x43.github.com.metaprov.modelaapi.services.review.v1.ListReviewRequest\x1a\x44.github.com.metaprov.modelaapi.services.review.v1.ListReviewResponse\"\x1f\x82\xd3\xe4\x93\x02\x19\x12\x17/v1/reviews/{namespace}\x12\xb5\x01\n\x0c\x43reateReview\x12\x45.github.com.metaprov.modelaapi.services.review.v1.CreateReviewRequest\x1a\x46.github.com.metaprov.modelaapi.services.review.v1.CreateReviewResponse\"\x16\x82\xd3\xe4\x93\x02\x10\"\x0b/v1/reviews:\x01*\x12\xbc\x01\n\tGetReview\x12\x42.github.com.metaprov.modelaapi.services.review.v1.GetReviewRequest\x1a\x43.github.com.metaprov.modelaapi.services.review.v1.GetReviewResponse\"&\x82\xd3\xe4\x93\x02 \x12\x1e/v1/reviews/{namespace}/{name}\x12\xe4\x01\n\x0cUpdateReview\x12\x45.github.com.metaprov.modelaapi.services.review.v1.UpdateReviewRequest\x1a\x46.github.com.metaprov.modelaapi.services.review.v1.UpdateReviewResponse\"E\x82\xd3\xe4\x93\x02?\x1a:/v1/reviews/{item.metadata.namespace}/{item.metadata.name}:\x01*\x12\xc5\x01\n\x0c\x44\x65leteReview\x12\x45.github.com.metaprov.modelaapi.services.review.v1.DeleteReviewRequest\x1a\x46.github.com.metaprov.modelaapi.services.review.v1.DeleteReviewResponse\"&\x82\xd3\xe4\x93\x02 *\x1e/v1/reviews/{namespace}/{name}B2Z0github.com/metaprov/modelaapi/services/review/v1b\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_field__mask__pb2.DESCRIPTOR,google_dot_protobuf_dot_empty__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,])




_GETREVIEWREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.review.v1.GetReviewRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.review.v1.GetReviewRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.review.v1.GetReviewRequest.LabelsEntry.value', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=428,
  serialized_end=473,
)

_GETREVIEWREQUEST = _descriptor.Descriptor(
  name='GetReviewRequest',
  full_name='github.com.metaprov.modelaapi.services.review.v1.GetReviewRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.review.v1.GetReviewRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.review.v1.GetReviewRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.review.v1.GetReviewRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_GETREVIEWREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=279,
  serialized_end=473,
)


_GETREVIEWRESPONSE = _descriptor.Descriptor(
  name='GetReviewResponse',
  full_name='github.com.metaprov.modelaapi.services.review.v1.GetReviewResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='review', full_name='github.com.metaprov.modelaapi.services.review.v1.GetReviewResponse.review', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modelaapi.services.review.v1.GetReviewResponse.yaml', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=475,
  serialized_end=586,
)


_CREATEREVIEWREQUEST = _descriptor.Descriptor(
  name='CreateReviewRequest',
  full_name='github.com.metaprov.modelaapi.services.review.v1.CreateReviewRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='review', full_name='github.com.metaprov.modelaapi.services.review.v1.CreateReviewRequest.review', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=588,
  serialized_end=687,
)


_CREATEREVIEWRESPONSE = _descriptor.Descriptor(
  name='CreateReviewResponse',
  full_name='github.com.metaprov.modelaapi.services.review.v1.CreateReviewResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=689,
  serialized_end=711,
)


_UPDATEREVIEWREQUEST = _descriptor.Descriptor(
  name='UpdateReviewRequest',
  full_name='github.com.metaprov.modelaapi.services.review.v1.UpdateReviewRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='review', full_name='github.com.metaprov.modelaapi.services.review.v1.UpdateReviewRequest.review', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='field_mask', full_name='github.com.metaprov.modelaapi.services.review.v1.UpdateReviewRequest.field_mask', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=714,
  serialized_end=861,
)


_UPDATEREVIEWRESPONSE = _descriptor.Descriptor(
  name='UpdateReviewResponse',
  full_name='github.com.metaprov.modelaapi.services.review.v1.UpdateReviewResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=863,
  serialized_end=885,
)


_DELETEREVIEWREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.review.v1.DeleteReviewRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.review.v1.DeleteReviewRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.review.v1.DeleteReviewRequest.LabelsEntry.value', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=428,
  serialized_end=473,
)

_DELETEREVIEWREQUEST = _descriptor.Descriptor(
  name='DeleteReviewRequest',
  full_name='github.com.metaprov.modelaapi.services.review.v1.DeleteReviewRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.review.v1.DeleteReviewRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modelaapi.services.review.v1.DeleteReviewRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.review.v1.DeleteReviewRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_DELETEREVIEWREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=888,
  serialized_end=1088,
)


_DELETEREVIEWRESPONSE = _descriptor.Descriptor(
  name='DeleteReviewResponse',
  full_name='github.com.metaprov.modelaapi.services.review.v1.DeleteReviewResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1090,
  serialized_end=1112,
)


_LISTREVIEWREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modelaapi.services.review.v1.ListReviewRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modelaapi.services.review.v1.ListReviewRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modelaapi.services.review.v1.ListReviewRequest.LabelsEntry.value', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=428,
  serialized_end=473,
)

_LISTREVIEWREQUEST = _descriptor.Descriptor(
  name='ListReviewRequest',
  full_name='github.com.metaprov.modelaapi.services.review.v1.ListReviewRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modelaapi.services.review.v1.ListReviewRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modelaapi.services.review.v1.ListReviewRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_size', full_name='github.com.metaprov.modelaapi.services.review.v1.ListReviewRequest.page_size', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_token', full_name='github.com.metaprov.modelaapi.services.review.v1.ListReviewRequest.page_token', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTREVIEWREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1115,
  serialized_end=1336,
)


_LISTREVIEWRESPONSE = _descriptor.Descriptor(
  name='ListReviewResponse',
  full_name='github.com.metaprov.modelaapi.services.review.v1.ListReviewResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='reviewes', full_name='github.com.metaprov.modelaapi.services.review.v1.ListReviewResponse.reviewes', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='next_page_token', full_name='github.com.metaprov.modelaapi.services.review.v1.ListReviewResponse.next_page_token', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1339,
  serialized_end=1468,
)

_GETREVIEWREQUEST_LABELSENTRY.containing_type = _GETREVIEWREQUEST
_GETREVIEWREQUEST.fields_by_name['labels'].message_type = _GETREVIEWREQUEST_LABELSENTRY
_GETREVIEWRESPONSE.fields_by_name['review'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2._REVIEW
_CREATEREVIEWREQUEST.fields_by_name['review'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2._REVIEW
_UPDATEREVIEWREQUEST.fields_by_name['review'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2._REVIEW
_UPDATEREVIEWREQUEST.fields_by_name['field_mask'].message_type = google_dot_protobuf_dot_field__mask__pb2._FIELDMASK
_DELETEREVIEWREQUEST_LABELSENTRY.containing_type = _DELETEREVIEWREQUEST
_DELETEREVIEWREQUEST.fields_by_name['labels'].message_type = _DELETEREVIEWREQUEST_LABELSENTRY
_LISTREVIEWREQUEST_LABELSENTRY.containing_type = _LISTREVIEWREQUEST
_LISTREVIEWREQUEST.fields_by_name['labels'].message_type = _LISTREVIEWREQUEST_LABELSENTRY
_LISTREVIEWRESPONSE.fields_by_name['reviewes'].message_type = github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2._REVIEWLIST
DESCRIPTOR.message_types_by_name['GetReviewRequest'] = _GETREVIEWREQUEST
DESCRIPTOR.message_types_by_name['GetReviewResponse'] = _GETREVIEWRESPONSE
DESCRIPTOR.message_types_by_name['CreateReviewRequest'] = _CREATEREVIEWREQUEST
DESCRIPTOR.message_types_by_name['CreateReviewResponse'] = _CREATEREVIEWRESPONSE
DESCRIPTOR.message_types_by_name['UpdateReviewRequest'] = _UPDATEREVIEWREQUEST
DESCRIPTOR.message_types_by_name['UpdateReviewResponse'] = _UPDATEREVIEWRESPONSE
DESCRIPTOR.message_types_by_name['DeleteReviewRequest'] = _DELETEREVIEWREQUEST
DESCRIPTOR.message_types_by_name['DeleteReviewResponse'] = _DELETEREVIEWRESPONSE
DESCRIPTOR.message_types_by_name['ListReviewRequest'] = _LISTREVIEWREQUEST
DESCRIPTOR.message_types_by_name['ListReviewResponse'] = _LISTREVIEWRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

GetReviewRequest = _reflection.GeneratedProtocolMessageType('GetReviewRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _GETREVIEWREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.review.v1.review_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.review.v1.GetReviewRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _GETREVIEWREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.review.v1.review_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.review.v1.GetReviewRequest)
  })
_sym_db.RegisterMessage(GetReviewRequest)
_sym_db.RegisterMessage(GetReviewRequest.LabelsEntry)

GetReviewResponse = _reflection.GeneratedProtocolMessageType('GetReviewResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETREVIEWRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.review.v1.review_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.review.v1.GetReviewResponse)
  })
_sym_db.RegisterMessage(GetReviewResponse)

CreateReviewRequest = _reflection.GeneratedProtocolMessageType('CreateReviewRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEREVIEWREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.review.v1.review_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.review.v1.CreateReviewRequest)
  })
_sym_db.RegisterMessage(CreateReviewRequest)

CreateReviewResponse = _reflection.GeneratedProtocolMessageType('CreateReviewResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEREVIEWRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.review.v1.review_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.review.v1.CreateReviewResponse)
  })
_sym_db.RegisterMessage(CreateReviewResponse)

UpdateReviewRequest = _reflection.GeneratedProtocolMessageType('UpdateReviewRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEREVIEWREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.review.v1.review_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.review.v1.UpdateReviewRequest)
  })
_sym_db.RegisterMessage(UpdateReviewRequest)

UpdateReviewResponse = _reflection.GeneratedProtocolMessageType('UpdateReviewResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEREVIEWRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.review.v1.review_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.review.v1.UpdateReviewResponse)
  })
_sym_db.RegisterMessage(UpdateReviewResponse)

DeleteReviewRequest = _reflection.GeneratedProtocolMessageType('DeleteReviewRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _DELETEREVIEWREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.review.v1.review_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.review.v1.DeleteReviewRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _DELETEREVIEWREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.review.v1.review_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.review.v1.DeleteReviewRequest)
  })
_sym_db.RegisterMessage(DeleteReviewRequest)
_sym_db.RegisterMessage(DeleteReviewRequest.LabelsEntry)

DeleteReviewResponse = _reflection.GeneratedProtocolMessageType('DeleteReviewResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEREVIEWRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.review.v1.review_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.review.v1.DeleteReviewResponse)
  })
_sym_db.RegisterMessage(DeleteReviewResponse)

ListReviewRequest = _reflection.GeneratedProtocolMessageType('ListReviewRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTREVIEWREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.review.v1.review_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.review.v1.ListReviewRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTREVIEWREQUEST,
  '__module__' : 'github.com.metaprov.modelaapi.services.review.v1.review_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.review.v1.ListReviewRequest)
  })
_sym_db.RegisterMessage(ListReviewRequest)
_sym_db.RegisterMessage(ListReviewRequest.LabelsEntry)

ListReviewResponse = _reflection.GeneratedProtocolMessageType('ListReviewResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTREVIEWRESPONSE,
  '__module__' : 'github.com.metaprov.modelaapi.services.review.v1.review_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.review.v1.ListReviewResponse)
  })
_sym_db.RegisterMessage(ListReviewResponse)


DESCRIPTOR._options = None
_GETREVIEWREQUEST_LABELSENTRY._options = None
_DELETEREVIEWREQUEST_LABELSENTRY._options = None
_LISTREVIEWREQUEST_LABELSENTRY._options = None

_REVIEWSERVICE = _descriptor.ServiceDescriptor(
  name='ReviewService',
  full_name='github.com.metaprov.modelaapi.services.review.v1.ReviewService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1471,
  serialized_end=2480,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListReviews',
    full_name='github.com.metaprov.modelaapi.services.review.v1.ReviewService.ListReviews',
    index=0,
    containing_service=None,
    input_type=_LISTREVIEWREQUEST,
    output_type=_LISTREVIEWRESPONSE,
    serialized_options=b'\202\323\344\223\002\031\022\027/v1/reviews/{namespace}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateReview',
    full_name='github.com.metaprov.modelaapi.services.review.v1.ReviewService.CreateReview',
    index=1,
    containing_service=None,
    input_type=_CREATEREVIEWREQUEST,
    output_type=_CREATEREVIEWRESPONSE,
    serialized_options=b'\202\323\344\223\002\020\"\013/v1/reviews:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetReview',
    full_name='github.com.metaprov.modelaapi.services.review.v1.ReviewService.GetReview',
    index=2,
    containing_service=None,
    input_type=_GETREVIEWREQUEST,
    output_type=_GETREVIEWRESPONSE,
    serialized_options=b'\202\323\344\223\002 \022\036/v1/reviews/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateReview',
    full_name='github.com.metaprov.modelaapi.services.review.v1.ReviewService.UpdateReview',
    index=3,
    containing_service=None,
    input_type=_UPDATEREVIEWREQUEST,
    output_type=_UPDATEREVIEWRESPONSE,
    serialized_options=b'\202\323\344\223\002?\032:/v1/reviews/{item.metadata.namespace}/{item.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteReview',
    full_name='github.com.metaprov.modelaapi.services.review.v1.ReviewService.DeleteReview',
    index=4,
    containing_service=None,
    input_type=_DELETEREVIEWREQUEST,
    output_type=_DELETEREVIEWRESPONSE,
    serialized_options=b'\202\323\344\223\002 *\036/v1/reviews/{namespace}/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_REVIEWSERVICE)

DESCRIPTOR.services_by_name['ReviewService'] = _REVIEWSERVICE

# @@protoc_insertion_point(module_scope)
