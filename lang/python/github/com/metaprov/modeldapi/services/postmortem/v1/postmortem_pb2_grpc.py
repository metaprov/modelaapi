# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modelaapi.services.postmortem.v1 import postmortem_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2


class PostMortemServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListPostMortems = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/ListPostMortems',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.ListPostMortemsRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.ListPostMortemsResponse.FromString,
                )
        self.CreatePostMortem = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/CreatePostMortem',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.CreatePostMortemRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.CreatePostMortemResponse.FromString,
                )
        self.GetPostMortem = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/GetPostMortem',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.GetPostMortemRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.GetPostMortemResponse.FromString,
                )
        self.UpdatePostMortem = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/UpdatePostMortem',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.UpdatePostMortemRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.UpdatePostMortemResponse.FromString,
                )
        self.DeletePostMortem = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/DeletePostMortem',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.DeletePostMortemRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.DeletePostMortemResponse.FromString,
                )


class PostMortemServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListPostMortems(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreatePostMortem(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetPostMortem(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdatePostMortem(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeletePostMortem(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_PostMortemServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListPostMortems': grpc.unary_unary_rpc_method_handler(
                    servicer.ListPostMortems,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.ListPostMortemsRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.ListPostMortemsResponse.SerializeToString,
            ),
            'CreatePostMortem': grpc.unary_unary_rpc_method_handler(
                    servicer.CreatePostMortem,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.CreatePostMortemRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.CreatePostMortemResponse.SerializeToString,
            ),
            'GetPostMortem': grpc.unary_unary_rpc_method_handler(
                    servicer.GetPostMortem,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.GetPostMortemRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.GetPostMortemResponse.SerializeToString,
            ),
            'UpdatePostMortem': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdatePostMortem,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.UpdatePostMortemRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.UpdatePostMortemResponse.SerializeToString,
            ),
            'DeletePostMortem': grpc.unary_unary_rpc_method_handler(
                    servicer.DeletePostMortem,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.DeletePostMortemRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.DeletePostMortemResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class PostMortemService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListPostMortems(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/ListPostMortems',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.ListPostMortemsRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.ListPostMortemsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreatePostMortem(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/CreatePostMortem',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.CreatePostMortemRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.CreatePostMortemResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetPostMortem(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/GetPostMortem',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.GetPostMortemRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.GetPostMortemResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdatePostMortem(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/UpdatePostMortem',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.UpdatePostMortemRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.UpdatePostMortemResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeletePostMortem(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.postmortem.v1.PostMortemService/DeletePostMortem',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.DeletePostMortemRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_postmortem_dot_v1_dot_postmortem__pb2.DeletePostMortemResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
