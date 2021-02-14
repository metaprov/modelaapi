# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.trainerd.v1 import trainerd_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2


class TrainerdServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Train = channel.unary_unary(
                '/github.com.metaprov.modeld.services.trainerd.v1.TrainerdService/Train',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TrainRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TrainResponse.FromString,
                )
        self.Forecast = channel.unary_unary(
                '/github.com.metaprov.modeld.services.trainerd.v1.TrainerdService/Forecast',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.ForecastRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.ForecastResponse.FromString,
                )
        self.Test = channel.unary_unary(
                '/github.com.metaprov.modeld.services.trainerd.v1.TrainerdService/Test',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TestRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TestResponse.FromString,
                )
        self.TrainEnsemble = channel.unary_unary(
                '/github.com.metaprov.modeld.services.trainerd.v1.TrainerdService/TrainEnsemble',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TrainEnsembleRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TrainResponse.FromString,
                )
        self.TestEnsemble = channel.unary_unary(
                '/github.com.metaprov.modeld.services.trainerd.v1.TrainerdService/TestEnsemble',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TestEnsembleRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TestResponse.FromString,
                )
        self.Shutdown = channel.unary_unary(
                '/github.com.metaprov.modeld.services.trainerd.v1.TrainerdService/Shutdown',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.ShutdownRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.ShutdownResponse.FromString,
                )


class TrainerdServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Train(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Forecast(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Test(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def TrainEnsemble(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def TestEnsemble(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Shutdown(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_TrainerdServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Train': grpc.unary_unary_rpc_method_handler(
                    servicer.Train,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TrainRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TrainResponse.SerializeToString,
            ),
            'Forecast': grpc.unary_unary_rpc_method_handler(
                    servicer.Forecast,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.ForecastRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.ForecastResponse.SerializeToString,
            ),
            'Test': grpc.unary_unary_rpc_method_handler(
                    servicer.Test,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TestRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TestResponse.SerializeToString,
            ),
            'TrainEnsemble': grpc.unary_unary_rpc_method_handler(
                    servicer.TrainEnsemble,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TrainEnsembleRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TrainResponse.SerializeToString,
            ),
            'TestEnsemble': grpc.unary_unary_rpc_method_handler(
                    servicer.TestEnsemble,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TestEnsembleRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TestResponse.SerializeToString,
            ),
            'Shutdown': grpc.unary_unary_rpc_method_handler(
                    servicer.Shutdown,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.ShutdownRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.ShutdownResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeld.services.trainerd.v1.TrainerdService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class TrainerdService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def Train(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.trainerd.v1.TrainerdService/Train',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TrainRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TrainResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Forecast(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.trainerd.v1.TrainerdService/Forecast',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.ForecastRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.ForecastResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Test(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.trainerd.v1.TrainerdService/Test',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TestRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TestResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def TrainEnsemble(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.trainerd.v1.TrainerdService/TrainEnsemble',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TrainEnsembleRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TrainResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def TestEnsemble(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.trainerd.v1.TrainerdService/TestEnsemble',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TestEnsembleRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.TestResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Shutdown(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.trainerd.v1.TrainerdService/Shutdown',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.ShutdownRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_trainerd_dot_v1_dot_trainerd__pb2.ShutdownResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
