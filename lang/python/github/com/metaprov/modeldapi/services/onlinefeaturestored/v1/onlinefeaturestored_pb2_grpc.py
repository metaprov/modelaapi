# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.onlinefeaturestored.v1 import onlinefeaturestored_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2


class OnlineFeatureStoreServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.CreateFeature = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/CreateFeature',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.CreateFeatureRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.CreateFeatureResponse.FromString,
                )
        self.DeleteFeature = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/DeleteFeature',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.DeleteFeatureRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.DeleteFeatureResponse.FromString,
                )
        self.ListFeatures = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/ListFeatures',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.ListFeaturesRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.ListFeaturesResponse.FromString,
                )
        self.GetFeature = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/GetFeature',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.GetFeatureRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.GetFeatureResponse.FromString,
                )
        self.UpdateFeature = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/UpdateFeature',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.UpdateFeatureRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.UpdateFeatureResponse.FromString,
                )
        self.Enrich = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Enrich',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.EnrichRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.EnrichResponse.FromString,
                )


class OnlineFeatureStoreServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def CreateFeature(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteFeature(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListFeatures(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetFeature(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateFeature(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Enrich(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_OnlineFeatureStoreServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'CreateFeature': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateFeature,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.CreateFeatureRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.CreateFeatureResponse.SerializeToString,
            ),
            'DeleteFeature': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteFeature,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.DeleteFeatureRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.DeleteFeatureResponse.SerializeToString,
            ),
            'ListFeatures': grpc.unary_unary_rpc_method_handler(
                    servicer.ListFeatures,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.ListFeaturesRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.ListFeaturesResponse.SerializeToString,
            ),
            'GetFeature': grpc.unary_unary_rpc_method_handler(
                    servicer.GetFeature,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.GetFeatureRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.GetFeatureResponse.SerializeToString,
            ),
            'UpdateFeature': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateFeature,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.UpdateFeatureRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.UpdateFeatureResponse.SerializeToString,
            ),
            'Enrich': grpc.unary_unary_rpc_method_handler(
                    servicer.Enrich,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.EnrichRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.EnrichResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class OnlineFeatureStoreService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def CreateFeature(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/CreateFeature',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.CreateFeatureRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.CreateFeatureResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteFeature(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/DeleteFeature',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.DeleteFeatureRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.DeleteFeatureResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ListFeatures(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/ListFeatures',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.ListFeaturesRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.ListFeaturesResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetFeature(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/GetFeature',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.GetFeatureRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.GetFeatureResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateFeature(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/UpdateFeature',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.UpdateFeatureRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.UpdateFeatureResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Enrich(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.onlinefeaturestored.v1.OnlineFeatureStoreService/Enrich',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.EnrichRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_onlinefeaturestored_dot_v1_dot_onlinefeaturestored__pb2.EnrichResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
