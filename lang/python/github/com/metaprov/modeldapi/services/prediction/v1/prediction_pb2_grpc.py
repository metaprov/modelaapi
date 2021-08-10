# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.prediction.v1 import prediction_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2


class PredictionServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListPredictions = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.prediction.v1.PredictionService/ListPredictions',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.ListPredictionsRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.ListPredictionsResponse.FromString,
                )
        self.CreatePrediction = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.prediction.v1.PredictionService/CreatePrediction',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.CreatePredictionRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.CreatePredictionResponse.FromString,
                )
        self.GetPrediction = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.prediction.v1.PredictionService/GetPrediction',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.GetPredictionRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.GetPredictionResponse.FromString,
                )
        self.UpdatePrediction = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.prediction.v1.PredictionService/UpdatePrediction',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.UpdatePredictionRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.UpdatePredictionResponse.FromString,
                )
        self.DeletePrediction = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.prediction.v1.PredictionService/DeletePrediction',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DeletePredictionRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DeletePredictionResponse.FromString,
                )
        self.Download = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.prediction.v1.PredictionService/Download',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DownloadPredictionRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DownloadPredictionResponse.FromString,
                )
        self.Abort = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.prediction.v1.PredictionService/Abort',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.AbortPredictionRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.AbortPredictionResponse.FromString,
                )


class PredictionServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListPredictions(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreatePrediction(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetPrediction(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdatePrediction(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeletePrediction(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Download(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Abort(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_PredictionServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListPredictions': grpc.unary_unary_rpc_method_handler(
                    servicer.ListPredictions,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.ListPredictionsRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.ListPredictionsResponse.SerializeToString,
            ),
            'CreatePrediction': grpc.unary_unary_rpc_method_handler(
                    servicer.CreatePrediction,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.CreatePredictionRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.CreatePredictionResponse.SerializeToString,
            ),
            'GetPrediction': grpc.unary_unary_rpc_method_handler(
                    servicer.GetPrediction,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.GetPredictionRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.GetPredictionResponse.SerializeToString,
            ),
            'UpdatePrediction': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdatePrediction,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.UpdatePredictionRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.UpdatePredictionResponse.SerializeToString,
            ),
            'DeletePrediction': grpc.unary_unary_rpc_method_handler(
                    servicer.DeletePrediction,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DeletePredictionRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DeletePredictionResponse.SerializeToString,
            ),
            'Download': grpc.unary_unary_rpc_method_handler(
                    servicer.Download,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DownloadPredictionRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DownloadPredictionResponse.SerializeToString,
            ),
            'Abort': grpc.unary_unary_rpc_method_handler(
                    servicer.Abort,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.AbortPredictionRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.AbortPredictionResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeldapi.services.prediction.v1.PredictionService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class PredictionService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListPredictions(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.prediction.v1.PredictionService/ListPredictions',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.ListPredictionsRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.ListPredictionsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreatePrediction(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.prediction.v1.PredictionService/CreatePrediction',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.CreatePredictionRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.CreatePredictionResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetPrediction(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.prediction.v1.PredictionService/GetPrediction',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.GetPredictionRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.GetPredictionResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdatePrediction(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.prediction.v1.PredictionService/UpdatePrediction',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.UpdatePredictionRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.UpdatePredictionResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeletePrediction(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.prediction.v1.PredictionService/DeletePrediction',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DeletePredictionRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DeletePredictionResponse.FromString,
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
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.prediction.v1.PredictionService/Download',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DownloadPredictionRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DownloadPredictionResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Abort(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.prediction.v1.PredictionService/Abort',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.AbortPredictionRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.AbortPredictionResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
