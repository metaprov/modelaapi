# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.predictionpipeline.v1 import predictionpipeline_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2


class PredictionPipelineServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListPredictionPipelines = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/ListPredictionPipelines',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.ListPredictionPipelinesRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.ListPredictionPipelinesResponse.FromString,
                )
        self.CreatePredictionPipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/CreatePredictionPipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.CreatePredictionPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.CreatePredictionPipelineResponse.FromString,
                )
        self.GetPredictionPipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/GetPredictionPipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.GetPredictionPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.GetPredictionPipelineResponse.FromString,
                )
        self.UpdatePredictionPipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/UpdatePredictionPipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.UpdatePredictionPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.UpdatePredictionPipelineResponse.FromString,
                )
        self.DeletePredictionPipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/DeletePredictionPipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.DeletePredictionPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.DeletePredictionPipelineResponse.FromString,
                )
        self.Download = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/Download',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.DownloadPredictionPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.DownloadPredictionPipelineResponse.FromString,
                )
        self.Run = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/Run',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.RunPredictionPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.RunPredictionPipelineResponse.FromString,
                )


class PredictionPipelineServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListPredictionPipelines(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreatePredictionPipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetPredictionPipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdatePredictionPipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeletePredictionPipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Download(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Run(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_PredictionPipelineServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListPredictionPipelines': grpc.unary_unary_rpc_method_handler(
                    servicer.ListPredictionPipelines,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.ListPredictionPipelinesRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.ListPredictionPipelinesResponse.SerializeToString,
            ),
            'CreatePredictionPipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.CreatePredictionPipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.CreatePredictionPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.CreatePredictionPipelineResponse.SerializeToString,
            ),
            'GetPredictionPipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.GetPredictionPipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.GetPredictionPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.GetPredictionPipelineResponse.SerializeToString,
            ),
            'UpdatePredictionPipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdatePredictionPipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.UpdatePredictionPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.UpdatePredictionPipelineResponse.SerializeToString,
            ),
            'DeletePredictionPipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.DeletePredictionPipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.DeletePredictionPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.DeletePredictionPipelineResponse.SerializeToString,
            ),
            'Download': grpc.unary_unary_rpc_method_handler(
                    servicer.Download,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.DownloadPredictionPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.DownloadPredictionPipelineResponse.SerializeToString,
            ),
            'Run': grpc.unary_unary_rpc_method_handler(
                    servicer.Run,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.RunPredictionPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.RunPredictionPipelineResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class PredictionPipelineService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListPredictionPipelines(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/ListPredictionPipelines',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.ListPredictionPipelinesRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.ListPredictionPipelinesResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreatePredictionPipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/CreatePredictionPipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.CreatePredictionPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.CreatePredictionPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetPredictionPipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/GetPredictionPipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.GetPredictionPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.GetPredictionPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdatePredictionPipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/UpdatePredictionPipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.UpdatePredictionPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.UpdatePredictionPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeletePredictionPipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/DeletePredictionPipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.DeletePredictionPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.DeletePredictionPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Download(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/Download',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.DownloadPredictionPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.DownloadPredictionPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Run(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictionpipeline.v1.PredictionPipelineService/Run',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.RunPredictionPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictionpipeline_dot_v1_dot_predictionpipeline__pb2.RunPredictionPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
