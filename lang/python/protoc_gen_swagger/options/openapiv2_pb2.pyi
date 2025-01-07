from google.protobuf import any_pb2 as _any_pb2
from google.protobuf import struct_pb2 as _struct_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Swagger(_message.Message):
    __slots__ = ("swagger", "info", "host", "base_path", "schemes", "consumes", "produces", "responses", "security_definitions", "security", "external_docs", "extensions")
    class SwaggerScheme(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        UNKNOWN: _ClassVar[Swagger.SwaggerScheme]
        HTTP: _ClassVar[Swagger.SwaggerScheme]
        HTTPS: _ClassVar[Swagger.SwaggerScheme]
        WS: _ClassVar[Swagger.SwaggerScheme]
        WSS: _ClassVar[Swagger.SwaggerScheme]
    UNKNOWN: Swagger.SwaggerScheme
    HTTP: Swagger.SwaggerScheme
    HTTPS: Swagger.SwaggerScheme
    WS: Swagger.SwaggerScheme
    WSS: Swagger.SwaggerScheme
    class ResponsesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Response
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Response, _Mapping]] = ...) -> None: ...
    class ExtensionsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _struct_pb2.Value
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_struct_pb2.Value, _Mapping]] = ...) -> None: ...
    SWAGGER_FIELD_NUMBER: _ClassVar[int]
    INFO_FIELD_NUMBER: _ClassVar[int]
    HOST_FIELD_NUMBER: _ClassVar[int]
    BASE_PATH_FIELD_NUMBER: _ClassVar[int]
    SCHEMES_FIELD_NUMBER: _ClassVar[int]
    CONSUMES_FIELD_NUMBER: _ClassVar[int]
    PRODUCES_FIELD_NUMBER: _ClassVar[int]
    RESPONSES_FIELD_NUMBER: _ClassVar[int]
    SECURITY_DEFINITIONS_FIELD_NUMBER: _ClassVar[int]
    SECURITY_FIELD_NUMBER: _ClassVar[int]
    EXTERNAL_DOCS_FIELD_NUMBER: _ClassVar[int]
    EXTENSIONS_FIELD_NUMBER: _ClassVar[int]
    swagger: str
    info: Info
    host: str
    base_path: str
    schemes: _containers.RepeatedScalarFieldContainer[Swagger.SwaggerScheme]
    consumes: _containers.RepeatedScalarFieldContainer[str]
    produces: _containers.RepeatedScalarFieldContainer[str]
    responses: _containers.MessageMap[str, Response]
    security_definitions: SecurityDefinitions
    security: _containers.RepeatedCompositeFieldContainer[SecurityRequirement]
    external_docs: ExternalDocumentation
    extensions: _containers.MessageMap[str, _struct_pb2.Value]
    def __init__(self, swagger: _Optional[str] = ..., info: _Optional[_Union[Info, _Mapping]] = ..., host: _Optional[str] = ..., base_path: _Optional[str] = ..., schemes: _Optional[_Iterable[_Union[Swagger.SwaggerScheme, str]]] = ..., consumes: _Optional[_Iterable[str]] = ..., produces: _Optional[_Iterable[str]] = ..., responses: _Optional[_Mapping[str, Response]] = ..., security_definitions: _Optional[_Union[SecurityDefinitions, _Mapping]] = ..., security: _Optional[_Iterable[_Union[SecurityRequirement, _Mapping]]] = ..., external_docs: _Optional[_Union[ExternalDocumentation, _Mapping]] = ..., extensions: _Optional[_Mapping[str, _struct_pb2.Value]] = ...) -> None: ...

class Operation(_message.Message):
    __slots__ = ("tags", "summary", "description", "external_docs", "operation_id", "consumes", "produces", "responses", "schemes", "deprecated", "security", "extensions")
    class ResponsesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Response
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Response, _Mapping]] = ...) -> None: ...
    class ExtensionsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _struct_pb2.Value
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_struct_pb2.Value, _Mapping]] = ...) -> None: ...
    TAGS_FIELD_NUMBER: _ClassVar[int]
    SUMMARY_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    EXTERNAL_DOCS_FIELD_NUMBER: _ClassVar[int]
    OPERATION_ID_FIELD_NUMBER: _ClassVar[int]
    CONSUMES_FIELD_NUMBER: _ClassVar[int]
    PRODUCES_FIELD_NUMBER: _ClassVar[int]
    RESPONSES_FIELD_NUMBER: _ClassVar[int]
    SCHEMES_FIELD_NUMBER: _ClassVar[int]
    DEPRECATED_FIELD_NUMBER: _ClassVar[int]
    SECURITY_FIELD_NUMBER: _ClassVar[int]
    EXTENSIONS_FIELD_NUMBER: _ClassVar[int]
    tags: _containers.RepeatedScalarFieldContainer[str]
    summary: str
    description: str
    external_docs: ExternalDocumentation
    operation_id: str
    consumes: _containers.RepeatedScalarFieldContainer[str]
    produces: _containers.RepeatedScalarFieldContainer[str]
    responses: _containers.MessageMap[str, Response]
    schemes: _containers.RepeatedScalarFieldContainer[str]
    deprecated: bool
    security: _containers.RepeatedCompositeFieldContainer[SecurityRequirement]
    extensions: _containers.MessageMap[str, _struct_pb2.Value]
    def __init__(self, tags: _Optional[_Iterable[str]] = ..., summary: _Optional[str] = ..., description: _Optional[str] = ..., external_docs: _Optional[_Union[ExternalDocumentation, _Mapping]] = ..., operation_id: _Optional[str] = ..., consumes: _Optional[_Iterable[str]] = ..., produces: _Optional[_Iterable[str]] = ..., responses: _Optional[_Mapping[str, Response]] = ..., schemes: _Optional[_Iterable[str]] = ..., deprecated: bool = ..., security: _Optional[_Iterable[_Union[SecurityRequirement, _Mapping]]] = ..., extensions: _Optional[_Mapping[str, _struct_pb2.Value]] = ...) -> None: ...

class Response(_message.Message):
    __slots__ = ("description", "schema", "extensions")
    class ExtensionsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _struct_pb2.Value
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_struct_pb2.Value, _Mapping]] = ...) -> None: ...
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_FIELD_NUMBER: _ClassVar[int]
    EXTENSIONS_FIELD_NUMBER: _ClassVar[int]
    description: str
    schema: Schema
    extensions: _containers.MessageMap[str, _struct_pb2.Value]
    def __init__(self, description: _Optional[str] = ..., schema: _Optional[_Union[Schema, _Mapping]] = ..., extensions: _Optional[_Mapping[str, _struct_pb2.Value]] = ...) -> None: ...

class Info(_message.Message):
    __slots__ = ("title", "description", "terms_of_service", "contact", "license", "version", "extensions")
    class ExtensionsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _struct_pb2.Value
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_struct_pb2.Value, _Mapping]] = ...) -> None: ...
    TITLE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    TERMS_OF_SERVICE_FIELD_NUMBER: _ClassVar[int]
    CONTACT_FIELD_NUMBER: _ClassVar[int]
    LICENSE_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    EXTENSIONS_FIELD_NUMBER: _ClassVar[int]
    title: str
    description: str
    terms_of_service: str
    contact: Contact
    license: License
    version: str
    extensions: _containers.MessageMap[str, _struct_pb2.Value]
    def __init__(self, title: _Optional[str] = ..., description: _Optional[str] = ..., terms_of_service: _Optional[str] = ..., contact: _Optional[_Union[Contact, _Mapping]] = ..., license: _Optional[_Union[License, _Mapping]] = ..., version: _Optional[str] = ..., extensions: _Optional[_Mapping[str, _struct_pb2.Value]] = ...) -> None: ...

class Contact(_message.Message):
    __slots__ = ("name", "url", "email")
    NAME_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    name: str
    url: str
    email: str
    def __init__(self, name: _Optional[str] = ..., url: _Optional[str] = ..., email: _Optional[str] = ...) -> None: ...

class License(_message.Message):
    __slots__ = ("name", "url")
    NAME_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    name: str
    url: str
    def __init__(self, name: _Optional[str] = ..., url: _Optional[str] = ...) -> None: ...

class ExternalDocumentation(_message.Message):
    __slots__ = ("description", "url")
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    description: str
    url: str
    def __init__(self, description: _Optional[str] = ..., url: _Optional[str] = ...) -> None: ...

class Schema(_message.Message):
    __slots__ = ("json_schema", "discriminator", "read_only", "external_docs", "example")
    JSON_SCHEMA_FIELD_NUMBER: _ClassVar[int]
    DISCRIMINATOR_FIELD_NUMBER: _ClassVar[int]
    READ_ONLY_FIELD_NUMBER: _ClassVar[int]
    EXTERNAL_DOCS_FIELD_NUMBER: _ClassVar[int]
    EXAMPLE_FIELD_NUMBER: _ClassVar[int]
    json_schema: JSONSchema
    discriminator: str
    read_only: bool
    external_docs: ExternalDocumentation
    example: _any_pb2.Any
    def __init__(self, json_schema: _Optional[_Union[JSONSchema, _Mapping]] = ..., discriminator: _Optional[str] = ..., read_only: bool = ..., external_docs: _Optional[_Union[ExternalDocumentation, _Mapping]] = ..., example: _Optional[_Union[_any_pb2.Any, _Mapping]] = ...) -> None: ...

class JSONSchema(_message.Message):
    __slots__ = ("ref", "title", "description", "default", "read_only", "multiple_of", "maximum", "exclusive_maximum", "minimum", "exclusive_minimum", "max_length", "min_length", "pattern", "max_items", "min_items", "unique_items", "max_properties", "min_properties", "required", "array", "type")
    class JSONSchemaSimpleTypes(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        UNKNOWN: _ClassVar[JSONSchema.JSONSchemaSimpleTypes]
        ARRAY: _ClassVar[JSONSchema.JSONSchemaSimpleTypes]
        BOOLEAN: _ClassVar[JSONSchema.JSONSchemaSimpleTypes]
        INTEGER: _ClassVar[JSONSchema.JSONSchemaSimpleTypes]
        NULL: _ClassVar[JSONSchema.JSONSchemaSimpleTypes]
        NUMBER: _ClassVar[JSONSchema.JSONSchemaSimpleTypes]
        OBJECT: _ClassVar[JSONSchema.JSONSchemaSimpleTypes]
        STRING: _ClassVar[JSONSchema.JSONSchemaSimpleTypes]
    UNKNOWN: JSONSchema.JSONSchemaSimpleTypes
    ARRAY: JSONSchema.JSONSchemaSimpleTypes
    BOOLEAN: JSONSchema.JSONSchemaSimpleTypes
    INTEGER: JSONSchema.JSONSchemaSimpleTypes
    NULL: JSONSchema.JSONSchemaSimpleTypes
    NUMBER: JSONSchema.JSONSchemaSimpleTypes
    OBJECT: JSONSchema.JSONSchemaSimpleTypes
    STRING: JSONSchema.JSONSchemaSimpleTypes
    REF_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    DEFAULT_FIELD_NUMBER: _ClassVar[int]
    READ_ONLY_FIELD_NUMBER: _ClassVar[int]
    MULTIPLE_OF_FIELD_NUMBER: _ClassVar[int]
    MAXIMUM_FIELD_NUMBER: _ClassVar[int]
    EXCLUSIVE_MAXIMUM_FIELD_NUMBER: _ClassVar[int]
    MINIMUM_FIELD_NUMBER: _ClassVar[int]
    EXCLUSIVE_MINIMUM_FIELD_NUMBER: _ClassVar[int]
    MAX_LENGTH_FIELD_NUMBER: _ClassVar[int]
    MIN_LENGTH_FIELD_NUMBER: _ClassVar[int]
    PATTERN_FIELD_NUMBER: _ClassVar[int]
    MAX_ITEMS_FIELD_NUMBER: _ClassVar[int]
    MIN_ITEMS_FIELD_NUMBER: _ClassVar[int]
    UNIQUE_ITEMS_FIELD_NUMBER: _ClassVar[int]
    MAX_PROPERTIES_FIELD_NUMBER: _ClassVar[int]
    MIN_PROPERTIES_FIELD_NUMBER: _ClassVar[int]
    REQUIRED_FIELD_NUMBER: _ClassVar[int]
    ARRAY_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    ref: str
    title: str
    description: str
    default: str
    read_only: bool
    multiple_of: float
    maximum: float
    exclusive_maximum: bool
    minimum: float
    exclusive_minimum: bool
    max_length: int
    min_length: int
    pattern: str
    max_items: int
    min_items: int
    unique_items: bool
    max_properties: int
    min_properties: int
    required: _containers.RepeatedScalarFieldContainer[str]
    array: _containers.RepeatedScalarFieldContainer[str]
    type: _containers.RepeatedScalarFieldContainer[JSONSchema.JSONSchemaSimpleTypes]
    def __init__(self, ref: _Optional[str] = ..., title: _Optional[str] = ..., description: _Optional[str] = ..., default: _Optional[str] = ..., read_only: bool = ..., multiple_of: _Optional[float] = ..., maximum: _Optional[float] = ..., exclusive_maximum: bool = ..., minimum: _Optional[float] = ..., exclusive_minimum: bool = ..., max_length: _Optional[int] = ..., min_length: _Optional[int] = ..., pattern: _Optional[str] = ..., max_items: _Optional[int] = ..., min_items: _Optional[int] = ..., unique_items: bool = ..., max_properties: _Optional[int] = ..., min_properties: _Optional[int] = ..., required: _Optional[_Iterable[str]] = ..., array: _Optional[_Iterable[str]] = ..., type: _Optional[_Iterable[_Union[JSONSchema.JSONSchemaSimpleTypes, str]]] = ...) -> None: ...

class Tag(_message.Message):
    __slots__ = ("description", "external_docs")
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    EXTERNAL_DOCS_FIELD_NUMBER: _ClassVar[int]
    description: str
    external_docs: ExternalDocumentation
    def __init__(self, description: _Optional[str] = ..., external_docs: _Optional[_Union[ExternalDocumentation, _Mapping]] = ...) -> None: ...

class SecurityDefinitions(_message.Message):
    __slots__ = ("security",)
    class SecurityEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: SecurityScheme
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[SecurityScheme, _Mapping]] = ...) -> None: ...
    SECURITY_FIELD_NUMBER: _ClassVar[int]
    security: _containers.MessageMap[str, SecurityScheme]
    def __init__(self, security: _Optional[_Mapping[str, SecurityScheme]] = ...) -> None: ...

class SecurityScheme(_message.Message):
    __slots__ = ("type", "description", "name", "flow", "authorization_url", "token_url", "scopes", "extensions")
    class Type(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        TYPE_INVALID: _ClassVar[SecurityScheme.Type]
        TYPE_BASIC: _ClassVar[SecurityScheme.Type]
        TYPE_API_KEY: _ClassVar[SecurityScheme.Type]
        TYPE_OAUTH2: _ClassVar[SecurityScheme.Type]
    TYPE_INVALID: SecurityScheme.Type
    TYPE_BASIC: SecurityScheme.Type
    TYPE_API_KEY: SecurityScheme.Type
    TYPE_OAUTH2: SecurityScheme.Type
    class In(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        IN_INVALID: _ClassVar[SecurityScheme.In]
        IN_QUERY: _ClassVar[SecurityScheme.In]
        IN_HEADER: _ClassVar[SecurityScheme.In]
    IN_INVALID: SecurityScheme.In
    IN_QUERY: SecurityScheme.In
    IN_HEADER: SecurityScheme.In
    class Flow(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        FLOW_INVALID: _ClassVar[SecurityScheme.Flow]
        FLOW_IMPLICIT: _ClassVar[SecurityScheme.Flow]
        FLOW_PASSWORD: _ClassVar[SecurityScheme.Flow]
        FLOW_APPLICATION: _ClassVar[SecurityScheme.Flow]
        FLOW_ACCESS_CODE: _ClassVar[SecurityScheme.Flow]
    FLOW_INVALID: SecurityScheme.Flow
    FLOW_IMPLICIT: SecurityScheme.Flow
    FLOW_PASSWORD: SecurityScheme.Flow
    FLOW_APPLICATION: SecurityScheme.Flow
    FLOW_ACCESS_CODE: SecurityScheme.Flow
    class ExtensionsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _struct_pb2.Value
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_struct_pb2.Value, _Mapping]] = ...) -> None: ...
    TYPE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    IN_FIELD_NUMBER: _ClassVar[int]
    FLOW_FIELD_NUMBER: _ClassVar[int]
    AUTHORIZATION_URL_FIELD_NUMBER: _ClassVar[int]
    TOKEN_URL_FIELD_NUMBER: _ClassVar[int]
    SCOPES_FIELD_NUMBER: _ClassVar[int]
    EXTENSIONS_FIELD_NUMBER: _ClassVar[int]
    type: SecurityScheme.Type
    description: str
    name: str
    flow: SecurityScheme.Flow
    authorization_url: str
    token_url: str
    scopes: Scopes
    extensions: _containers.MessageMap[str, _struct_pb2.Value]
    def __init__(self, type: _Optional[_Union[SecurityScheme.Type, str]] = ..., description: _Optional[str] = ..., name: _Optional[str] = ..., flow: _Optional[_Union[SecurityScheme.Flow, str]] = ..., authorization_url: _Optional[str] = ..., token_url: _Optional[str] = ..., scopes: _Optional[_Union[Scopes, _Mapping]] = ..., extensions: _Optional[_Mapping[str, _struct_pb2.Value]] = ..., **kwargs) -> None: ...

class SecurityRequirement(_message.Message):
    __slots__ = ("security_requirement",)
    class SecurityRequirementValue(_message.Message):
        __slots__ = ("scope",)
        SCOPE_FIELD_NUMBER: _ClassVar[int]
        scope: _containers.RepeatedScalarFieldContainer[str]
        def __init__(self, scope: _Optional[_Iterable[str]] = ...) -> None: ...
    class SecurityRequirementEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: SecurityRequirement.SecurityRequirementValue
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[SecurityRequirement.SecurityRequirementValue, _Mapping]] = ...) -> None: ...
    SECURITY_REQUIREMENT_FIELD_NUMBER: _ClassVar[int]
    security_requirement: _containers.MessageMap[str, SecurityRequirement.SecurityRequirementValue]
    def __init__(self, security_requirement: _Optional[_Mapping[str, SecurityRequirement.SecurityRequirementValue]] = ...) -> None: ...

class Scopes(_message.Message):
    __slots__ = ("scope",)
    class ScopeEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    SCOPE_FIELD_NUMBER: _ClassVar[int]
    scope: _containers.ScalarMap[str, str]
    def __init__(self, scope: _Optional[_Mapping[str, str]] = ...) -> None: ...
