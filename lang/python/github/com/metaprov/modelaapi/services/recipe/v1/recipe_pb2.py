# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/recipe/v1/recipe.proto
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
from github.com.metaprov.modelaapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_common_dot_v1_dot_common__pb2
from github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n=github.com/metaprov/modelaapi/services/recipe/v1/recipe.proto\x12\x30github.com.metaprov.modelaapi.services.recipe.v1\x1a google/protobuf/field_mask.proto\x1a\x1cgoogle/api/annotations.proto\x1a=github.com/metaprov/modelaapi/services/common/v1/common.proto\x1a\x44github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated.proto\"\xf1\x01\n\x12ListRecipesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12`\n\x06labels\x18\x02 \x03(\x0b\x32P.github.com.metaprov.modelaapi.services.recipe.v1.ListRecipesRequest.LabelsEntry\x12\x11\n\tpage_size\x18\x03 \x01(\x05\x12\x12\n\npage_token\x18\x04 \x01(\t\x12\x10\n\x08order_by\x18\x05 \x01(\t\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x81\x01\n\x13ListRecipesResponse\x12Q\n\x07recipes\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeList\x12\x17\n\x0fnext_page_token\x18\x02 \x01(\t\"c\n\x13\x43reateRecipeRequest\x12L\n\x06recipe\x18\x01 \x01(\x0b\x32<.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe\"\x16\n\x14\x43reateRecipeResponse\"\x93\x01\n\x13UpdateRecipeRequest\x12L\n\x06recipe\x18\x01 \x01(\x0b\x32<.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe\x12.\n\nfield_mask\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.FieldMask\"\x16\n\x14UpdateRecipeResponse\"3\n\x10GetRecipeRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x87\x01\n\x14ProfileRecipeRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12N\n\x04spec\x18\x03 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeSpec\"c\n\x15ProfileRecipeResponse\x12J\n\x05table\x18\x01 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\"\x83\x01\n\x10RunRecipeRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12N\n\x04spec\x18\x03 \x01(\x0b\x32@.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.RecipeSpec\"o\n\x11RunRecipeResponse\x12L\n\x06recipe\x18\x01 \x01(\x0b\x32<.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"o\n\x11GetRecipeResponse\x12L\n\x06recipe\x18\x01 \x01(\x0b\x32<.github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Recipe\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"6\n\x13\x44\x65leteRecipeRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x16\n\x14\x44\x65leteRecipeResponse2\x8d\x0b\n\rRecipeService\x12\xbb\x01\n\x0bListRecipes\x12\x44.github.com.metaprov.modelaapi.services.recipe.v1.ListRecipesRequest\x1a\x45.github.com.metaprov.modelaapi.services.recipe.v1.ListRecipesResponse\"\x1f\x82\xd3\xe4\x93\x02\x19\x12\x17/v1/recipes/{namespace}\x12\xb5\x01\n\x0c\x43reateRecipe\x12\x45.github.com.metaprov.modelaapi.services.recipe.v1.CreateRecipeRequest\x1a\x46.github.com.metaprov.modelaapi.services.recipe.v1.CreateRecipeResponse\"\x16\x82\xd3\xe4\x93\x02\x10\"\x0b/v1/recipes:\x01*\x12\xbc\x01\n\tGetRecipe\x12\x42.github.com.metaprov.modelaapi.services.recipe.v1.GetRecipeRequest\x1a\x43.github.com.metaprov.modelaapi.services.recipe.v1.GetRecipeResponse\"&\x82\xd3\xe4\x93\x02 \x12\x1e/v1/recipes/{namespace}/{name}\x12\xc0\x01\n\tRunRecipe\x12\x42.github.com.metaprov.modelaapi.services.recipe.v1.RunRecipeRequest\x1a\x43.github.com.metaprov.modelaapi.services.recipe.v1.RunRecipeResponse\"*\x82\xd3\xe4\x93\x02$\x12\"/v1/recipes/{namespace}/{name}:run\x12\xd0\x01\n\rProfileRecipe\x12\x46.github.com.metaprov.modelaapi.services.recipe.v1.ProfileRecipeRequest\x1aG.github.com.metaprov.modelaapi.services.recipe.v1.ProfileRecipeResponse\".\x82\xd3\xe4\x93\x02(\x12&/v1/recipes/{namespace}/{name}:profile\x12\xe8\x01\n\x0cUpdateRecipe\x12\x45.github.com.metaprov.modelaapi.services.recipe.v1.UpdateRecipeRequest\x1a\x46.github.com.metaprov.modelaapi.services.recipe.v1.UpdateRecipeResponse\"I\x82\xd3\xe4\x93\x02\x43\x1a>/v1/recipes/{recipe.metadata.namespace}/{recipe.metadata.name}:\x01*\x12\xc5\x01\n\x0c\x44\x65leteRecipe\x12\x45.github.com.metaprov.modelaapi.services.recipe.v1.DeleteRecipeRequest\x1a\x46.github.com.metaprov.modelaapi.services.recipe.v1.DeleteRecipeResponse\"&\x82\xd3\xe4\x93\x02 *\x1e/v1/recipes/{namespace}/{name}B2Z0github.com/metaprov/modelaapi/services/recipe/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.recipe.v1.recipe_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z0github.com/metaprov/modelaapi/services/recipe/v1'
  _globals['_LISTRECIPESREQUEST_LABELSENTRY']._loaded_options = None
  _globals['_LISTRECIPESREQUEST_LABELSENTRY']._serialized_options = b'8\001'
  _globals['_RECIPESERVICE'].methods_by_name['ListRecipes']._loaded_options = None
  _globals['_RECIPESERVICE'].methods_by_name['ListRecipes']._serialized_options = b'\202\323\344\223\002\031\022\027/v1/recipes/{namespace}'
  _globals['_RECIPESERVICE'].methods_by_name['CreateRecipe']._loaded_options = None
  _globals['_RECIPESERVICE'].methods_by_name['CreateRecipe']._serialized_options = b'\202\323\344\223\002\020\"\013/v1/recipes:\001*'
  _globals['_RECIPESERVICE'].methods_by_name['GetRecipe']._loaded_options = None
  _globals['_RECIPESERVICE'].methods_by_name['GetRecipe']._serialized_options = b'\202\323\344\223\002 \022\036/v1/recipes/{namespace}/{name}'
  _globals['_RECIPESERVICE'].methods_by_name['RunRecipe']._loaded_options = None
  _globals['_RECIPESERVICE'].methods_by_name['RunRecipe']._serialized_options = b'\202\323\344\223\002$\022\"/v1/recipes/{namespace}/{name}:run'
  _globals['_RECIPESERVICE'].methods_by_name['ProfileRecipe']._loaded_options = None
  _globals['_RECIPESERVICE'].methods_by_name['ProfileRecipe']._serialized_options = b'\202\323\344\223\002(\022&/v1/recipes/{namespace}/{name}:profile'
  _globals['_RECIPESERVICE'].methods_by_name['UpdateRecipe']._loaded_options = None
  _globals['_RECIPESERVICE'].methods_by_name['UpdateRecipe']._serialized_options = b'\202\323\344\223\002C\032>/v1/recipes/{recipe.metadata.namespace}/{recipe.metadata.name}:\001*'
  _globals['_RECIPESERVICE'].methods_by_name['DeleteRecipe']._loaded_options = None
  _globals['_RECIPESERVICE'].methods_by_name['DeleteRecipe']._serialized_options = b'\202\323\344\223\002 *\036/v1/recipes/{namespace}/{name}'
  _globals['_LISTRECIPESREQUEST']._serialized_start=313
  _globals['_LISTRECIPESREQUEST']._serialized_end=554
  _globals['_LISTRECIPESREQUEST_LABELSENTRY']._serialized_start=509
  _globals['_LISTRECIPESREQUEST_LABELSENTRY']._serialized_end=554
  _globals['_LISTRECIPESRESPONSE']._serialized_start=557
  _globals['_LISTRECIPESRESPONSE']._serialized_end=686
  _globals['_CREATERECIPEREQUEST']._serialized_start=688
  _globals['_CREATERECIPEREQUEST']._serialized_end=787
  _globals['_CREATERECIPERESPONSE']._serialized_start=789
  _globals['_CREATERECIPERESPONSE']._serialized_end=811
  _globals['_UPDATERECIPEREQUEST']._serialized_start=814
  _globals['_UPDATERECIPEREQUEST']._serialized_end=961
  _globals['_UPDATERECIPERESPONSE']._serialized_start=963
  _globals['_UPDATERECIPERESPONSE']._serialized_end=985
  _globals['_GETRECIPEREQUEST']._serialized_start=987
  _globals['_GETRECIPEREQUEST']._serialized_end=1038
  _globals['_PROFILERECIPEREQUEST']._serialized_start=1041
  _globals['_PROFILERECIPEREQUEST']._serialized_end=1176
  _globals['_PROFILERECIPERESPONSE']._serialized_start=1178
  _globals['_PROFILERECIPERESPONSE']._serialized_end=1277
  _globals['_RUNRECIPEREQUEST']._serialized_start=1280
  _globals['_RUNRECIPEREQUEST']._serialized_end=1411
  _globals['_RUNRECIPERESPONSE']._serialized_start=1413
  _globals['_RUNRECIPERESPONSE']._serialized_end=1524
  _globals['_GETRECIPERESPONSE']._serialized_start=1526
  _globals['_GETRECIPERESPONSE']._serialized_end=1637
  _globals['_DELETERECIPEREQUEST']._serialized_start=1639
  _globals['_DELETERECIPEREQUEST']._serialized_end=1693
  _globals['_DELETERECIPERESPONSE']._serialized_start=1695
  _globals['_DELETERECIPERESPONSE']._serialized_end=1717
  _globals['_RECIPESERVICE']._serialized_start=1720
  _globals['_RECIPESERVICE']._serialized_end=3141
# @@protoc_insertion_point(module_scope)
