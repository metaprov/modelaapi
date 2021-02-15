# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.conversation.v1 import conversation_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2


class ConversationServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.List = channel.unary_unary(
                '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/List',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.ListConversationRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.ListConversationResponse.FromString,
                )
        self.Create = channel.unary_unary(
                '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Create',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.CreateConversationRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.CreateConversationResponse.FromString,
                )
        self.Get = channel.unary_unary(
                '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Get',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.GetConversationRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.GetConversationResponse.FromString,
                )
        self.Update = channel.unary_unary(
                '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Update',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.UpdateConversationRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.UpdateConversationResponse.FromString,
                )
        self.Delete = channel.unary_unary(
                '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Delete',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.DeleteConversationRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.DeleteConversationResponse.FromString,
                )


class ConversationServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def List(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Create(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Get(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Update(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Delete(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ConversationServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'List': grpc.unary_unary_rpc_method_handler(
                    servicer.List,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.ListConversationRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.ListConversationResponse.SerializeToString,
            ),
            'Create': grpc.unary_unary_rpc_method_handler(
                    servicer.Create,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.CreateConversationRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.CreateConversationResponse.SerializeToString,
            ),
            'Get': grpc.unary_unary_rpc_method_handler(
                    servicer.Get,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.GetConversationRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.GetConversationResponse.SerializeToString,
            ),
            'Update': grpc.unary_unary_rpc_method_handler(
                    servicer.Update,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.UpdateConversationRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.UpdateConversationResponse.SerializeToString,
            ),
            'Delete': grpc.unary_unary_rpc_method_handler(
                    servicer.Delete,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.DeleteConversationRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.DeleteConversationResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeld.services.conversation.v1.ConversationService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ConversationService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def List(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/List',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.ListConversationRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.ListConversationResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Create(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Create',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.CreateConversationRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.CreateConversationResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Get(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Get',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.GetConversationRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.GetConversationResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Update(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Update',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.UpdateConversationRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.UpdateConversationResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Delete(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.conversation.v1.ConversationService/Delete',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.DeleteConversationRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_conversation_dot_v1_dot_conversation__pb2.DeleteConversationResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
