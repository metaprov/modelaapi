# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modelaapi.services.onlinefeaturestored.v1 import onlinefeaturestored_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2


class OnlineFeatureStoreServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.OnlineGet = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/OnlineGet',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.OnlineGetRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.OnlineGetResponse.FromString,
                )
        self.Push = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Push',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.PushRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.PushResponse.FromString,
                )


class OnlineFeatureStoreServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def OnlineGet(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Push(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_OnlineFeatureStoreServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'OnlineGet': grpc.unary_unary_rpc_method_handler(
                    servicer.OnlineGet,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.OnlineGetRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.OnlineGetResponse.SerializeToString,
            ),
            'Push': grpc.unary_unary_rpc_method_handler(
                    servicer.Push,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.PushRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.PushResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class OnlineFeatureStoreService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def OnlineGet(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/OnlineGet',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.OnlineGetRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.OnlineGetResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Push(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Push',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.PushRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.PushResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
