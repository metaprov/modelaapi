# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modelaapi.services.predictionrun.v1 import predictionrun_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2


class PredictionRunServiceStub(object):
    """///// Prediction Run Service ///////

    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListPredictionRuns = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService/ListPredictionRuns',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.ListPredictionRunsRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.ListPredictionRunsResponse.FromString,
                )
        self.CreatePredictionRun = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService/CreatePredictionRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.CreatePredictionRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.CreatePredictionRunResponse.FromString,
                )
        self.GetPredictionRun = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService/GetPredictionRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.GetPredictionRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.GetPredictionRunResponse.FromString,
                )
        self.UpdatePredictionRun = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService/UpdatePredictionRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.UpdatePredictionRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.UpdatePredictionRunResponse.FromString,
                )
        self.DeletePredictionRun = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService/DeletePredictionRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.DeletePredictionRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.DeletePredictionRunResponse.FromString,
                )
        self.DownloadPredictionRun = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService/DownloadPredictionRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.DownloadPredictionRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.DownloadPredictionRunResponse.FromString,
                )
        self.AbortPredictionRun = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService/AbortPredictionRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.AbortPredictionRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.AbortPredictionRunResponse.FromString,
                )


class PredictionRunServiceServicer(object):
    """///// Prediction Run Service ///////

    """

    def ListPredictionRuns(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreatePredictionRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetPredictionRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdatePredictionRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeletePredictionRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DownloadPredictionRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def AbortPredictionRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_PredictionRunServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListPredictionRuns': grpc.unary_unary_rpc_method_handler(
                    servicer.ListPredictionRuns,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.ListPredictionRunsRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.ListPredictionRunsResponse.SerializeToString,
            ),
            'CreatePredictionRun': grpc.unary_unary_rpc_method_handler(
                    servicer.CreatePredictionRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.CreatePredictionRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.CreatePredictionRunResponse.SerializeToString,
            ),
            'GetPredictionRun': grpc.unary_unary_rpc_method_handler(
                    servicer.GetPredictionRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.GetPredictionRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.GetPredictionRunResponse.SerializeToString,
            ),
            'UpdatePredictionRun': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdatePredictionRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.UpdatePredictionRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.UpdatePredictionRunResponse.SerializeToString,
            ),
            'DeletePredictionRun': grpc.unary_unary_rpc_method_handler(
                    servicer.DeletePredictionRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.DeletePredictionRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.DeletePredictionRunResponse.SerializeToString,
            ),
            'DownloadPredictionRun': grpc.unary_unary_rpc_method_handler(
                    servicer.DownloadPredictionRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.DownloadPredictionRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.DownloadPredictionRunResponse.SerializeToString,
            ),
            'AbortPredictionRun': grpc.unary_unary_rpc_method_handler(
                    servicer.AbortPredictionRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.AbortPredictionRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.AbortPredictionRunResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class PredictionRunService(object):
    """///// Prediction Run Service ///////

    """

    @staticmethod
    def ListPredictionRuns(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService/ListPredictionRuns',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.ListPredictionRunsRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.ListPredictionRunsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreatePredictionRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService/CreatePredictionRun',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.CreatePredictionRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.CreatePredictionRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetPredictionRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService/GetPredictionRun',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.GetPredictionRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.GetPredictionRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdatePredictionRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService/UpdatePredictionRun',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.UpdatePredictionRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.UpdatePredictionRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeletePredictionRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService/DeletePredictionRun',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.DeletePredictionRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.DeletePredictionRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DownloadPredictionRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService/DownloadPredictionRun',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.DownloadPredictionRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.DownloadPredictionRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def AbortPredictionRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionRunService/AbortPredictionRun',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.AbortPredictionRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_predictionrun_dot_v1_dot_predictionrun__pb2.AbortPredictionRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
