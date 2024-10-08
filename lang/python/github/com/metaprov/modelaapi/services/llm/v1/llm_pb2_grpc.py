# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modelaapi.services.llm.v1 import llm_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2


class LLMServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListLLMs = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.llm.v1.LLMService/ListLLMs',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.ListLLMsRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.ListLLMsResponse.FromString,
                )
        self.CreateLLM = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.llm.v1.LLMService/CreateLLM',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.CreateLLMRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.CreateLLMResponse.FromString,
                )
        self.GetLLM = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.llm.v1.LLMService/GetLLM',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.GetLLMRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.GetLLMResponse.FromString,
                )
        self.UpdateLLM = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.llm.v1.LLMService/UpdateLLM',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.UpdateLLMRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.UpdateLLMResponse.FromString,
                )
        self.DeleteLLM = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.llm.v1.LLMService/DeleteLLM',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.DeleteLLMRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.DeleteLLMResponse.FromString,
                )


class LLMServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListLLMs(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateLLM(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetLLM(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateLLM(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteLLM(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_LLMServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListLLMs': grpc.unary_unary_rpc_method_handler(
                    servicer.ListLLMs,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.ListLLMsRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.ListLLMsResponse.SerializeToString,
            ),
            'CreateLLM': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateLLM,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.CreateLLMRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.CreateLLMResponse.SerializeToString,
            ),
            'GetLLM': grpc.unary_unary_rpc_method_handler(
                    servicer.GetLLM,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.GetLLMRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.GetLLMResponse.SerializeToString,
            ),
            'UpdateLLM': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateLLM,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.UpdateLLMRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.UpdateLLMResponse.SerializeToString,
            ),
            'DeleteLLM': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteLLM,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.DeleteLLMRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.DeleteLLMResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modelaapi.services.llm.v1.LLMService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class LLMService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListLLMs(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.llm.v1.LLMService/ListLLMs',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.ListLLMsRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.ListLLMsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateLLM(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.llm.v1.LLMService/CreateLLM',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.CreateLLMRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.CreateLLMResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetLLM(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.llm.v1.LLMService/GetLLM',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.GetLLMRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.GetLLMResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateLLM(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.llm.v1.LLMService/UpdateLLM',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.UpdateLLMRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.UpdateLLMResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteLLM(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.llm.v1.LLMService/DeleteLLM',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.DeleteLLMRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_llm_dot_v1_dot_llm__pb2.DeleteLLMResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
