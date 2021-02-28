# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.labelingpipelinerun.v1 import labelingpipelinerun_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2


class LabelingPipelineRunServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListLabelingPipelineRuns = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/ListLabelingPipelineRuns',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.ListLabelingPipelineRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.ListLabelingPipelineRunResponse.FromString,
                )
        self.CreateLabelingPipelineRun = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/CreateLabelingPipelineRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.CreateLabelingPipelineRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.CreateLabelingPipelineRunResponse.FromString,
                )
        self.GetLabelingPipelineRun = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/GetLabelingPipelineRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.GetLabelingPipelineRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.GetLabelingPipelineRunResponse.FromString,
                )
        self.UpdateLabelingPipelineRun = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/UpdateLabelingPipelineRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.UpdateLabelingPipelineRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.UpdateLabelingPipelineRunResponse.FromString,
                )
        self.DeleteLabelingPipelineRun = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/DeleteLabelingPipelineRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.DeleteLabelingPipelineRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.DeleteLabelingPipelineRunResponse.FromString,
                )


class LabelingPipelineRunServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListLabelingPipelineRuns(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateLabelingPipelineRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetLabelingPipelineRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateLabelingPipelineRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteLabelingPipelineRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_LabelingPipelineRunServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListLabelingPipelineRuns': grpc.unary_unary_rpc_method_handler(
                    servicer.ListLabelingPipelineRuns,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.ListLabelingPipelineRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.ListLabelingPipelineRunResponse.SerializeToString,
            ),
            'CreateLabelingPipelineRun': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateLabelingPipelineRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.CreateLabelingPipelineRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.CreateLabelingPipelineRunResponse.SerializeToString,
            ),
            'GetLabelingPipelineRun': grpc.unary_unary_rpc_method_handler(
                    servicer.GetLabelingPipelineRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.GetLabelingPipelineRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.GetLabelingPipelineRunResponse.SerializeToString,
            ),
            'UpdateLabelingPipelineRun': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateLabelingPipelineRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.UpdateLabelingPipelineRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.UpdateLabelingPipelineRunResponse.SerializeToString,
            ),
            'DeleteLabelingPipelineRun': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteLabelingPipelineRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.DeleteLabelingPipelineRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.DeleteLabelingPipelineRunResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class LabelingPipelineRunService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListLabelingPipelineRuns(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/ListLabelingPipelineRuns',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.ListLabelingPipelineRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.ListLabelingPipelineRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateLabelingPipelineRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/CreateLabelingPipelineRun',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.CreateLabelingPipelineRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.CreateLabelingPipelineRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetLabelingPipelineRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/GetLabelingPipelineRun',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.GetLabelingPipelineRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.GetLabelingPipelineRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateLabelingPipelineRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/UpdateLabelingPipelineRun',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.UpdateLabelingPipelineRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.UpdateLabelingPipelineRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteLabelingPipelineRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService/DeleteLabelingPipelineRun',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.DeleteLabelingPipelineRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_labelingpipelinerun_dot_v1_dot_labelingpipelinerun__pb2.DeleteLabelingPipelineRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
