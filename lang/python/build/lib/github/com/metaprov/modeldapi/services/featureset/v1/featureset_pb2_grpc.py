# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.featureset.v1 import featureset_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2


class FeaturesetServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListFeaturesets = channel.unary_unary(
                '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/ListFeaturesets',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.ListFeaturesetRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.ListFeaturesetResponse.FromString,
                )
        self.CreateFeatureset = channel.unary_unary(
                '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/CreateFeatureset',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.CreateFeaturesetRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.CreateFeaturesetResponse.FromString,
                )
        self.GetFeatureset = channel.unary_unary(
                '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/GetFeatureset',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.GetFeaturesetRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.GetFeaturesetResponse.FromString,
                )
        self.UpdateFeatureset = channel.unary_unary(
                '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/UpdateFeatureset',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.UpdateFeaturesetRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.UpdateFeaturesetResponse.FromString,
                )
        self.DeleteFeatureset = channel.unary_unary(
                '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/DeleteFeatureset',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.DeleteFeaturesetRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.DeleteFeaturesetResponse.FromString,
                )


class FeaturesetServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListFeaturesets(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateFeatureset(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetFeatureset(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateFeatureset(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteFeatureset(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_FeaturesetServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListFeaturesets': grpc.unary_unary_rpc_method_handler(
                    servicer.ListFeaturesets,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.ListFeaturesetRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.ListFeaturesetResponse.SerializeToString,
            ),
            'CreateFeatureset': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateFeatureset,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.CreateFeaturesetRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.CreateFeaturesetResponse.SerializeToString,
            ),
            'GetFeatureset': grpc.unary_unary_rpc_method_handler(
                    servicer.GetFeatureset,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.GetFeaturesetRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.GetFeaturesetResponse.SerializeToString,
            ),
            'UpdateFeatureset': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateFeatureset,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.UpdateFeaturesetRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.UpdateFeaturesetResponse.SerializeToString,
            ),
            'DeleteFeatureset': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteFeatureset,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.DeleteFeaturesetRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.DeleteFeaturesetResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeld.services.featureset.v1.FeaturesetService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class FeaturesetService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListFeaturesets(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/ListFeaturesets',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.ListFeaturesetRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.ListFeaturesetResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateFeatureset(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/CreateFeatureset',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.CreateFeaturesetRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.CreateFeaturesetResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetFeatureset(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/GetFeatureset',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.GetFeaturesetRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.GetFeaturesetResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateFeatureset(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/UpdateFeatureset',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.UpdateFeaturesetRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.UpdateFeaturesetResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteFeatureset(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.featureset.v1.FeaturesetService/DeleteFeatureset',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.DeleteFeaturesetRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featureset_dot_v1_dot_featureset__pb2.DeleteFeaturesetResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
