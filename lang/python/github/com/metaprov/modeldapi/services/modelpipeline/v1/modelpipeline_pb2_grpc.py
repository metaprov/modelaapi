# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.modelpipeline.v1 import modelpipeline_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2


class ModelPipelineServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListModelPipelines = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelpipeline.v1.ModelPipelineService/ListModelPipelines',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.ListModelPipelinesRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.ListModelPipelinesResponse.FromString,
                )
        self.CreateModelPipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelpipeline.v1.ModelPipelineService/CreateModelPipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.CreateModelPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.CreateModelPipelineResponse.FromString,
                )
        self.GetModelPipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelpipeline.v1.ModelPipelineService/GetModelPipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.GetModelPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.GetModelPipelineResponse.FromString,
                )
        self.UpdateModelPipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelpipeline.v1.ModelPipelineService/UpdateModelPipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.UpdateModelPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.UpdateModelPipelineResponse.FromString,
                )
        self.DeleteModelPipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelpipeline.v1.ModelPipelineService/DeleteModelPipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.DeleteModelPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.DeleteModelPipelineResponse.FromString,
                )
        self.RunModelPipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelpipeline.v1.ModelPipelineService/RunModelPipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.RunModelPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.RunModelPipelineResponse.FromString,
                )


class ModelPipelineServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListModelPipelines(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateModelPipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetModelPipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateModelPipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteModelPipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def RunModelPipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ModelPipelineServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListModelPipelines': grpc.unary_unary_rpc_method_handler(
                    servicer.ListModelPipelines,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.ListModelPipelinesRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.ListModelPipelinesResponse.SerializeToString,
            ),
            'CreateModelPipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateModelPipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.CreateModelPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.CreateModelPipelineResponse.SerializeToString,
            ),
            'GetModelPipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.GetModelPipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.GetModelPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.GetModelPipelineResponse.SerializeToString,
            ),
            'UpdateModelPipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateModelPipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.UpdateModelPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.UpdateModelPipelineResponse.SerializeToString,
            ),
            'DeleteModelPipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteModelPipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.DeleteModelPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.DeleteModelPipelineResponse.SerializeToString,
            ),
            'RunModelPipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.RunModelPipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.RunModelPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.RunModelPipelineResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeldapi.services.modelpipeline.v1.ModelPipelineService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ModelPipelineService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListModelPipelines(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelpipeline.v1.ModelPipelineService/ListModelPipelines',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.ListModelPipelinesRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.ListModelPipelinesResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateModelPipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelpipeline.v1.ModelPipelineService/CreateModelPipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.CreateModelPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.CreateModelPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetModelPipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelpipeline.v1.ModelPipelineService/GetModelPipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.GetModelPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.GetModelPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateModelPipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelpipeline.v1.ModelPipelineService/UpdateModelPipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.UpdateModelPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.UpdateModelPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteModelPipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelpipeline.v1.ModelPipelineService/DeleteModelPipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.DeleteModelPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.DeleteModelPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def RunModelPipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelpipeline.v1.ModelPipelineService/RunModelPipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.RunModelPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipeline_dot_v1_dot_modelpipeline__pb2.RunModelPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
