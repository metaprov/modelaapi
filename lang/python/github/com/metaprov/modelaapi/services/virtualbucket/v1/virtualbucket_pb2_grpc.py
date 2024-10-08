# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc
import warnings

from github.com.metaprov.modelaapi.services.virtualbucket.v1 import virtualbucket_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2

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
        + f' but the generated code in github.com/metaprov/modelaapi/services/virtualbucket/v1/virtualbucket_pb2_grpc.py depends on'
        + f' grpcio>={GRPC_GENERATED_VERSION}.'
        + f' Please upgrade your grpc module to grpcio>={GRPC_GENERATED_VERSION}'
        + f' or downgrade your generated code using grpcio-tools<={GRPC_VERSION}.'
        + f' This warning will become an error in {EXPECTED_ERROR_RELEASE},'
        + f' scheduled for release on {SCHEDULED_RELEASE_DATE}.',
        RuntimeWarning
    )


class VirtualBucketServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListVirtualBuckets = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/ListVirtualBuckets',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.ListVirtualBucketsRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.ListVirtualBucketsResponse.FromString,
                _registered_method=True)
        self.CreateVirtualBucket = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/CreateVirtualBucket',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.CreateVirtualBucketRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.CreateVirtualBucketResponse.FromString,
                _registered_method=True)
        self.GetVirtualBucket = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/GetVirtualBucket',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.GetVirtualBucketRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.GetVirtualBucketResponse.FromString,
                _registered_method=True)
        self.UpdateVirtualBucket = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/UpdateVirtualBucket',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.UpdateVirtualBucketRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.UpdateVirtualBucketResponse.FromString,
                _registered_method=True)
        self.DeleteVirtualBucket = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/DeleteVirtualBucket',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.DeleteVirtualBucketRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.DeleteVirtualBucketResponse.FromString,
                _registered_method=True)


class VirtualBucketServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListVirtualBuckets(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateVirtualBucket(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetVirtualBucket(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateVirtualBucket(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteVirtualBucket(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_VirtualBucketServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListVirtualBuckets': grpc.unary_unary_rpc_method_handler(
                    servicer.ListVirtualBuckets,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.ListVirtualBucketsRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.ListVirtualBucketsResponse.SerializeToString,
            ),
            'CreateVirtualBucket': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateVirtualBucket,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.CreateVirtualBucketRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.CreateVirtualBucketResponse.SerializeToString,
            ),
            'GetVirtualBucket': grpc.unary_unary_rpc_method_handler(
                    servicer.GetVirtualBucket,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.GetVirtualBucketRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.GetVirtualBucketResponse.SerializeToString,
            ),
            'UpdateVirtualBucket': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateVirtualBucket,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.UpdateVirtualBucketRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.UpdateVirtualBucketResponse.SerializeToString,
            ),
            'DeleteVirtualBucket': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteVirtualBucket,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.DeleteVirtualBucketRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.DeleteVirtualBucketResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
    server.add_registered_method_handlers('github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService', rpc_method_handlers)


 # This class is part of an EXPERIMENTAL API.
class VirtualBucketService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListVirtualBuckets(request,
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
            '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/ListVirtualBuckets',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.ListVirtualBucketsRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.ListVirtualBucketsResponse.FromString,
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
    def CreateVirtualBucket(request,
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
            '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/CreateVirtualBucket',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.CreateVirtualBucketRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.CreateVirtualBucketResponse.FromString,
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
    def GetVirtualBucket(request,
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
            '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/GetVirtualBucket',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.GetVirtualBucketRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.GetVirtualBucketResponse.FromString,
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
    def UpdateVirtualBucket(request,
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
            '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/UpdateVirtualBucket',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.UpdateVirtualBucketRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.UpdateVirtualBucketResponse.FromString,
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
    def DeleteVirtualBucket(request,
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
            '/github.com.metaprov.modelaapi.services.virtualbucket.v1.VirtualBucketService/DeleteVirtualBucket',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.DeleteVirtualBucketRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_virtualbucket_dot_v1_dot_virtualbucket__pb2.DeleteVirtualBucketResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)
