# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/account/v1/account.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.protobuf import field_mask_pb2 as google_dot_protobuf_dot_field__mask__pb2
from github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n?github.com/metaprov/modelaapi/services/account/v1/account.proto\x12\x31github.com.metaprov.modelaapi.services.account.v1\x1a\x1cgoogle/api/annotations.proto\x1a google/protobuf/field_mask.proto\x1a\x45github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1/generated.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\"\xf4\x01\n\x13ListAccountsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x62\n\x06labels\x18\x02 \x03(\x0b\x32R.github.com.metaprov.modelaapi.services.account.v1.ListAccountsRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x85\x01\n\x14ListAccountsResponse\x12T\n\x08\x61\x63\x63ounts\x18\x01 \x01(\x0b\x32\x42.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.AccountList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"\x11\n\x0f\x41\x63\x63ountResponse\"y\n\x14\x43reateAccountRequest\x12O\n\x07\x61\x63\x63ount\x18\x01 \x01(\x0b\x32>.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account\x12\x10\n\x08password\x18\x02 \x01(\t\"\x17\n\x15\x43reateAccountResponse\"\x98\x01\n\x14UpdateAccountRequest\x12O\n\x07\x61\x63\x63ount\x18\x01 \x01(\x0b\x32>.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account\x12/\n\x0bupdate_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x17\n\x15UpdateAccountResponse\"4\n\x11GetAccountRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"s\n\x12GetAccountResponse\x12O\n\x07\x61\x63\x63ount\x18\x01 \x01(\x0b\x32>.github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Account\x12\x0c\n\x04yaml\x18\x02 \x01(\t\">\n\x1bGetAccountNamespacesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"s\n\x1cGetAccountNamespacesResponse\x12S\n\nnamespaces\x18\x01 \x03(\x0b\x32?.github.com.metaprov.modelaapi.services.common.v1.NamespaceInfo\"7\n\x14\x44\x65leteAccountRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x17\n\x15\x44\x65leteAccountResponse\"\x17\n\x15\x41\x63\x63ountCreateResponse\"\x10\n\x0eLogoutResponse\"\x17\n\x15ResetPasswordResponse\"H\n\x13\x41\x63\x63ountLoginRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x10\n\x08password\x18\x03 \x01(\t\"%\n\x14\x41\x63\x63ountLoginResponse\x12\r\n\x05token\x18\x01 \x01(\t\":\n\x17\x41\x63\x63ountGetByNameRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"%\n\x14\x41\x63\x63ountLogoutRequest\x12\r\n\x05token\x18\x01 \x01(\t\"h\n\x15\x43hangePasswordRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0b\n\x03old\x18\x03 \x01(\t\x12\x0b\n\x03new\x18\x04 \x01(\t\x12\x14\n\x0c\x63onfirmedNew\x18\x05 \x01(\t\"\x18\n\x16\x43hangePasswordResponse\"Z\n\x14ResetPasswordRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0b\n\x03new\x18\x03 \x01(\t\x12\x14\n\x0c\x63onfirmedNew\x18\x04 \x01(\t\"\x16\n\x14ResetPasswordReponse\"Z\n\x13UploadAvatarRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x12\n\nbucketName\x18\x03 \x01(\t\x12\x0e\n\x06\x61vatar\x18\x04 \x01(\x0c\"\x15\n\x13UploadAvatarReponse\"8\n\x15\x44ownloadAvatarRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\'\n\x15\x44ownloadAvatarReponse\x12\x0e\n\x06\x61vatar\x18\x01 \x01(\x0c\x32\xd9\x11\n\x0e\x41\x63\x63ountService\x12\xc1\x01\n\x0cListAccounts\x12\x46.github.com.metaprov.modelaapi.services.account.v1.ListAccountsRequest\x1aG.github.com.metaprov.modelaapi.services.account.v1.ListAccountsResponse\" \x82\xd3\xe4\x93\x02\x1a\x12\x18/v1/accounts/{namespace}\x12\xbb\x01\n\rCreateAccount\x12G.github.com.metaprov.modelaapi.services.account.v1.CreateAccountRequest\x1aH.github.com.metaprov.modelaapi.services.account.v1.CreateAccountResponse\"\x17\x82\xd3\xe4\x93\x02\x11\"\x0c/v1/accounts:\x01*\x12\xc2\x01\n\nGetAccount\x12\x44.github.com.metaprov.modelaapi.services.account.v1.GetAccountRequest\x1a\x45.github.com.metaprov.modelaapi.services.account.v1.GetAccountResponse\"\'\x82\xd3\xe4\x93\x02!\x12\x1f/v1/accounts/{namespace}/{name}\x12\xf0\x01\n\rUpdateAccount\x12G.github.com.metaprov.modelaapi.services.account.v1.UpdateAccountRequest\x1aH.github.com.metaprov.modelaapi.services.account.v1.UpdateAccountResponse\"L\x82\xd3\xe4\x93\x02\x46\x1a\x41/v1/accounts/{account.metadata.namespace}/{account.metadata.name}:\x01*\x12\xcb\x01\n\rDeleteAccount\x12G.github.com.metaprov.modelaapi.services.account.v1.DeleteAccountRequest\x1aH.github.com.metaprov.modelaapi.services.account.v1.DeleteAccountResponse\"\'\x82\xd3\xe4\x93\x02!*\x1f/v1/accounts/{namespace}/{name}\x12\xeb\x01\n\x14GetAccountNamespaces\x12N.github.com.metaprov.modelaapi.services.account.v1.GetAccountNamespacesRequest\x1aO.github.com.metaprov.modelaapi.services.account.v1.GetAccountNamespacesResponse\"2\x82\xd3\xe4\x93\x02,\x12*/v1/accounts/{namespace}/{name}:namespaces\x12\x9a\x01\n\x05Login\x12\x46.github.com.metaprov.modelaapi.services.account.v1.AccountLoginRequest\x1aG.github.com.metaprov.modelaapi.services.account.v1.AccountLoginResponse\"\x00\x12\x96\x01\n\x06Logout\x12G.github.com.metaprov.modelaapi.services.account.v1.AccountLogoutRequest\x1a\x41.github.com.metaprov.modelaapi.services.account.v1.LogoutResponse\"\x00\x12\xa7\x01\n\x0e\x43hangePassword\x12H.github.com.metaprov.modelaapi.services.account.v1.ChangePasswordRequest\x1aI.github.com.metaprov.modelaapi.services.account.v1.ChangePasswordResponse\"\x00\x12\xa4\x01\n\rResetPassword\x12G.github.com.metaprov.modelaapi.services.account.v1.ResetPasswordRequest\x1aH.github.com.metaprov.modelaapi.services.account.v1.ResetPasswordResponse\"\x00\x12\xa0\x01\n\x0cUploadAvatar\x12\x46.github.com.metaprov.modelaapi.services.account.v1.UploadAvatarRequest\x1a\x46.github.com.metaprov.modelaapi.services.account.v1.UploadAvatarReponse\"\x00\x12\xa6\x01\n\x0e\x44ownloadAvatar\x12H.github.com.metaprov.modelaapi.services.account.v1.DownloadAvatarRequest\x1aH.github.com.metaprov.modelaapi.services.account.v1.DownloadAvatarReponse\"\x00\x42\x33Z1github.com/metaprov/modelaapi/services/account/v1b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.account.v1.account_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z1github.com/metaprov/modelaapi/services/account/v1'
  _LISTACCOUNTSREQUEST_LABELSENTRY._options = None
  _LISTACCOUNTSREQUEST_LABELSENTRY._serialized_options = b'8\001'
  _ACCOUNTSERVICE.methods_by_name['ListAccounts']._options = None
  _ACCOUNTSERVICE.methods_by_name['ListAccounts']._serialized_options = b'\202\323\344\223\002\032\022\030/v1/accounts/{namespace}'
  _ACCOUNTSERVICE.methods_by_name['CreateAccount']._options = None
  _ACCOUNTSERVICE.methods_by_name['CreateAccount']._serialized_options = b'\202\323\344\223\002\021\"\014/v1/accounts:\001*'
  _ACCOUNTSERVICE.methods_by_name['GetAccount']._options = None
  _ACCOUNTSERVICE.methods_by_name['GetAccount']._serialized_options = b'\202\323\344\223\002!\022\037/v1/accounts/{namespace}/{name}'
  _ACCOUNTSERVICE.methods_by_name['UpdateAccount']._options = None
  _ACCOUNTSERVICE.methods_by_name['UpdateAccount']._serialized_options = b'\202\323\344\223\002F\032A/v1/accounts/{account.metadata.namespace}/{account.metadata.name}:\001*'
  _ACCOUNTSERVICE.methods_by_name['DeleteAccount']._options = None
  _ACCOUNTSERVICE.methods_by_name['DeleteAccount']._serialized_options = b'\202\323\344\223\002!*\037/v1/accounts/{namespace}/{name}'
  _ACCOUNTSERVICE.methods_by_name['GetAccountNamespaces']._options = None
  _ACCOUNTSERVICE.methods_by_name['GetAccountNamespaces']._serialized_options = b'\202\323\344\223\002,\022*/v1/accounts/{namespace}/{name}:namespaces'
  _LISTACCOUNTSREQUEST._serialized_start=317
  _LISTACCOUNTSREQUEST._serialized_end=561
  _LISTACCOUNTSREQUEST_LABELSENTRY._serialized_start=516
  _LISTACCOUNTSREQUEST_LABELSENTRY._serialized_end=561
  _LISTACCOUNTSRESPONSE._serialized_start=564
  _LISTACCOUNTSRESPONSE._serialized_end=697
  _ACCOUNTRESPONSE._serialized_start=699
  _ACCOUNTRESPONSE._serialized_end=716
  _CREATEACCOUNTREQUEST._serialized_start=718
  _CREATEACCOUNTREQUEST._serialized_end=839
  _CREATEACCOUNTRESPONSE._serialized_start=841
  _CREATEACCOUNTRESPONSE._serialized_end=864
  _UPDATEACCOUNTREQUEST._serialized_start=867
  _UPDATEACCOUNTREQUEST._serialized_end=1019
  _UPDATEACCOUNTRESPONSE._serialized_start=1021
  _UPDATEACCOUNTRESPONSE._serialized_end=1044
  _GETACCOUNTREQUEST._serialized_start=1046
  _GETACCOUNTREQUEST._serialized_end=1098
  _GETACCOUNTRESPONSE._serialized_start=1100
  _GETACCOUNTRESPONSE._serialized_end=1215
  _GETACCOUNTNAMESPACESREQUEST._serialized_start=1217
  _GETACCOUNTNAMESPACESREQUEST._serialized_end=1279
  _GETACCOUNTNAMESPACESRESPONSE._serialized_start=1281
  _GETACCOUNTNAMESPACESRESPONSE._serialized_end=1396
  _DELETEACCOUNTREQUEST._serialized_start=1398
  _DELETEACCOUNTREQUEST._serialized_end=1453
  _DELETEACCOUNTRESPONSE._serialized_start=1455
  _DELETEACCOUNTRESPONSE._serialized_end=1478
  _ACCOUNTCREATERESPONSE._serialized_start=1480
  _ACCOUNTCREATERESPONSE._serialized_end=1503
  _LOGOUTRESPONSE._serialized_start=1505
  _LOGOUTRESPONSE._serialized_end=1521
  _RESETPASSWORDRESPONSE._serialized_start=1523
  _RESETPASSWORDRESPONSE._serialized_end=1546
  _ACCOUNTLOGINREQUEST._serialized_start=1548
  _ACCOUNTLOGINREQUEST._serialized_end=1620
  _ACCOUNTLOGINRESPONSE._serialized_start=1622
  _ACCOUNTLOGINRESPONSE._serialized_end=1659
  _ACCOUNTGETBYNAMEREQUEST._serialized_start=1661
  _ACCOUNTGETBYNAMEREQUEST._serialized_end=1719
  _ACCOUNTLOGOUTREQUEST._serialized_start=1721
  _ACCOUNTLOGOUTREQUEST._serialized_end=1758
  _CHANGEPASSWORDREQUEST._serialized_start=1760
  _CHANGEPASSWORDREQUEST._serialized_end=1864
  _CHANGEPASSWORDRESPONSE._serialized_start=1866
  _CHANGEPASSWORDRESPONSE._serialized_end=1890
  _RESETPASSWORDREQUEST._serialized_start=1892
  _RESETPASSWORDREQUEST._serialized_end=1982
  _RESETPASSWORDREPONSE._serialized_start=1984
  _RESETPASSWORDREPONSE._serialized_end=2006
  _UPLOADAVATARREQUEST._serialized_start=2008
  _UPLOADAVATARREQUEST._serialized_end=2098
  _UPLOADAVATARREPONSE._serialized_start=2100
  _UPLOADAVATARREPONSE._serialized_end=2121
  _DOWNLOADAVATARREQUEST._serialized_start=2123
  _DOWNLOADAVATARREQUEST._serialized_end=2179
  _DOWNLOADAVATARREPONSE._serialized_start=2181
  _DOWNLOADAVATARREPONSE._serialized_end=2220
  _ACCOUNTSERVICE._serialized_start=2223
  _ACCOUNTSERVICE._serialized_end=4488
# @@protoc_insertion_point(module_scope)
