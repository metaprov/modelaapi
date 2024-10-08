# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc
import warnings

from github.com.metaprov.modelaapi.services.dataproduct.v1 import dataproduct_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2

GRPC_GENERATED_VERSION = '1.65.4'
GRPC_VERSION = grpc.__version__
EXPECTED_ERROR_RELEASE = '1.66.0'
SCHEDULED_RELEASE_DATE = 'August 6, 2024'
_version_not_supported = False

try:
    from grpc._utilities import first_version_is_lower
    _version_not_supported = first_version_is_lower(GRPC_VERSION, GRPC_GENERATED_VERSION)
except ImportError:
    _version_not_supported = True

if _version_not_supported:
    warnings.warn(
        f'The grpc package installed is at version {GRPC_VERSION},'
        + f' but the generated code in github.com/metaprov/modelaapi/services/dataproduct/v1/dataproduct_pb2_grpc.py depends on'
        + f' grpcio>={GRPC_GENERATED_VERSION}.'
        + f' Please upgrade your grpc module to grpcio>={GRPC_GENERATED_VERSION}'
        + f' or downgrade your generated code using grpcio-tools<={GRPC_VERSION}.'
        + f' This warning will become an error in {EXPECTED_ERROR_RELEASE},'
        + f' scheduled for release on {SCHEDULED_RELEASE_DATE}.',
        RuntimeWarning
    )


class DataProductServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListDataProducts = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/ListDataProducts',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.ListDataProductsRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.ListDataProductsResponse.FromString,
                _registered_method=True)
        self.CreateDataProduct = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/CreateDataProduct',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.CreateDataProductRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.CreateDataProductResponse.FromString,
                _registered_method=True)
        self.GetDataProduct = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/GetDataProduct',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.GetDataProductRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.GetDataProductResponse.FromString,
                _registered_method=True)
        self.UpdateDataProduct = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/UpdateDataProduct',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.UpdateDataProductRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.UpdateDataProductResponse.FromString,
                _registered_method=True)
        self.DeleteDataProduct = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/DeleteDataProduct',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.DeleteDataProductRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.DeleteDataProductResponse.FromString,
                _registered_method=True)


class DataProductServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListDataProducts(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateDataProduct(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetDataProduct(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateDataProduct(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteDataProduct(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_DataProductServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListDataProducts': grpc.unary_unary_rpc_method_handler(
                    servicer.ListDataProducts,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.ListDataProductsRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.ListDataProductsResponse.SerializeToString,
            ),
            'CreateDataProduct': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateDataProduct,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.CreateDataProductRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.CreateDataProductResponse.SerializeToString,
            ),
            'GetDataProduct': grpc.unary_unary_rpc_method_handler(
                    servicer.GetDataProduct,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.GetDataProductRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.GetDataProductResponse.SerializeToString,
            ),
            'UpdateDataProduct': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateDataProduct,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.UpdateDataProductRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.UpdateDataProductResponse.SerializeToString,
            ),
            'DeleteDataProduct': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteDataProduct,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.DeleteDataProductRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.DeleteDataProductResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
    server.add_registered_method_handlers('github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService', rpc_method_handlers)


 # This class is part of an EXPERIMENTAL API.
class DataProductService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListDataProducts(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/ListDataProducts',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.ListDataProductsRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.ListDataProductsResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def CreateDataProduct(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/CreateDataProduct',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.CreateDataProductRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.CreateDataProductResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def GetDataProduct(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/GetDataProduct',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.GetDataProductRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.GetDataProductResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def UpdateDataProduct(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/UpdateDataProduct',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.UpdateDataProductRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.UpdateDataProductResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def DeleteDataProduct(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/github.com.metaprov.modelaapi.services.dataproduct.v1.DataProductService/DeleteDataProduct',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.DeleteDataProductRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_dataproduct_dot_v1_dot_dataproduct__pb2.DeleteDataProductResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)
