# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modelaapi.services.servingsite.v1 import servingsite_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2


class ServingSiteServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListServingSites = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/ListServingSites',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.ListServingSitesRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.ListServingSitesResponse.FromString,
                )
        self.CreateServingSite = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/CreateServingSite',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.CreateServingSiteRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.CreateServingSiteResponse.FromString,
                )
        self.GetServingSite = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/GetServingSite',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.GetServingSiteRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.GetServingSiteResponse.FromString,
                )
        self.UpdateServingSite = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/UpdateServingSite',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.UpdateServingSiteRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.UpdateServingSiteResponse.FromString,
                )
        self.DeleteServingSite = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/DeleteServingSite',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.DeleteServingSiteRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.DeleteServingSiteResponse.FromString,
                )
        self.GetPublicKey = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/GetPublicKey',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.GetPublicKeyRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.GetPublicKeyResponse.FromString,
                )


class ServingSiteServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListServingSites(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateServingSite(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetServingSite(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateServingSite(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteServingSite(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetPublicKey(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ServingSiteServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListServingSites': grpc.unary_unary_rpc_method_handler(
                    servicer.ListServingSites,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.ListServingSitesRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.ListServingSitesResponse.SerializeToString,
            ),
            'CreateServingSite': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateServingSite,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.CreateServingSiteRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.CreateServingSiteResponse.SerializeToString,
            ),
            'GetServingSite': grpc.unary_unary_rpc_method_handler(
                    servicer.GetServingSite,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.GetServingSiteRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.GetServingSiteResponse.SerializeToString,
            ),
            'UpdateServingSite': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateServingSite,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.UpdateServingSiteRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.UpdateServingSiteResponse.SerializeToString,
            ),
            'DeleteServingSite': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteServingSite,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.DeleteServingSiteRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.DeleteServingSiteResponse.SerializeToString,
            ),
            'GetPublicKey': grpc.unary_unary_rpc_method_handler(
                    servicer.GetPublicKey,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.GetPublicKeyRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.GetPublicKeyResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ServingSiteService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListServingSites(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/ListServingSites',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.ListServingSitesRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.ListServingSitesResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateServingSite(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/CreateServingSite',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.CreateServingSiteRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.CreateServingSiteResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetServingSite(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/GetServingSite',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.GetServingSiteRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.GetServingSiteResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateServingSite(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/UpdateServingSite',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.UpdateServingSiteRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.UpdateServingSiteResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteServingSite(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/DeleteServingSite',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.DeleteServingSiteRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.DeleteServingSiteResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetPublicKey(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/GetPublicKey',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.GetPublicKeyRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_servingsite_dot_v1_dot_servingsite__pb2.GetPublicKeyResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
