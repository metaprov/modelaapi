# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.datapipeline.v1 import datapipeline_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2


class DataPipelineServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListDataPipelines = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/ListDataPipelines',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.ListDataPipelinesRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.ListDataPipelinesResponse.FromString,
                )
        self.CreateDataPipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/CreateDataPipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.CreateDataPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.CreateDataPipelineResponse.FromString,
                )
        self.GetDataPipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/GetDataPipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.GetDataPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.GetDataPipelineResponse.FromString,
                )
        self.UpdateDataPipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/UpdateDataPipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.UpdateDataPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.UpdateDataPipelineResponse.FromString,
                )
        self.DeleteDataPipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/DeleteDataPipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.DeleteDataPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.DeleteDataPipelineResponse.FromString,
                )
        self.Run = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/Run',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.RunDataPipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.RunDataPipelineResponse.FromString,
                )


class DataPipelineServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListDataPipelines(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateDataPipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetDataPipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateDataPipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteDataPipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Run(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_DataPipelineServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListDataPipelines': grpc.unary_unary_rpc_method_handler(
                    servicer.ListDataPipelines,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.ListDataPipelinesRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.ListDataPipelinesResponse.SerializeToString,
            ),
            'CreateDataPipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateDataPipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.CreateDataPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.CreateDataPipelineResponse.SerializeToString,
            ),
            'GetDataPipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.GetDataPipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.GetDataPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.GetDataPipelineResponse.SerializeToString,
            ),
            'UpdateDataPipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateDataPipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.UpdateDataPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.UpdateDataPipelineResponse.SerializeToString,
            ),
            'DeleteDataPipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteDataPipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.DeleteDataPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.DeleteDataPipelineResponse.SerializeToString,
            ),
            'Run': grpc.unary_unary_rpc_method_handler(
                    servicer.Run,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.RunDataPipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.RunDataPipelineResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class DataPipelineService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListDataPipelines(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/ListDataPipelines',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.ListDataPipelinesRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.ListDataPipelinesResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateDataPipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/CreateDataPipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.CreateDataPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.CreateDataPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetDataPipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/GetDataPipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.GetDataPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.GetDataPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateDataPipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/UpdateDataPipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.UpdateDataPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.UpdateDataPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteDataPipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/DeleteDataPipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.DeleteDataPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.DeleteDataPipelineResponse.FromString,
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
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.datapipeline.v1.DataPipelineService/Run',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.RunDataPipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_datapipeline_dot_v1_dot_datapipeline__pb2.RunDataPipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
