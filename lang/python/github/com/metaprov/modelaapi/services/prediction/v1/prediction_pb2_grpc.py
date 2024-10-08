# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc
import warnings

from github.com.metaprov.modelaapi.services.prediction.v1 import prediction_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2

GRPC_GENERATED_VERSION = '1.65.4'
GRPC_VERSION = grpc.__version__
EXPECTED_ERROR_RELEASE = '1.66.0'
SCHEDULED_RELEASE_DATE = 'August 6, 2024'
_version_not_supported = False

try:
    from grpc._utilities import first_version_is_lower
    _version_not_supported = first_version_is_lower(GRPC_VERSION, GRPC_GENERATED_VERSION)
except ImportError:
    _version_not_supported = True

if _version_not_supported:
    warnings.warn(
        f'The grpc package installed is at version {GRPC_VERSION},'
        + f' but the generated code in github.com/metaprov/modelaapi/services/prediction/v1/prediction_pb2_grpc.py depends on'
        + f' grpcio>={GRPC_GENERATED_VERSION}.'
        + f' Please upgrade your grpc module to grpcio>={GRPC_GENERATED_VERSION}'
        + f' or downgrade your generated code using grpcio-tools<={GRPC_VERSION}.'
        + f' This warning will become an error in {EXPECTED_ERROR_RELEASE},'
        + f' scheduled for release on {SCHEDULED_RELEASE_DATE}.',
        RuntimeWarning
    )


class PredictionServiceStub(object):
    """///// Prediction Service ///////

    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListPredictions = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/ListPredictions',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.ListPredictionsRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.ListPredictionsResponse.FromString,
                _registered_method=True)
        self.CreatePrediction = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/CreatePrediction',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.CreatePredictionRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.CreatePredictionResponse.FromString,
                _registered_method=True)
        self.GetPrediction = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/GetPrediction',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.GetPredictionRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.GetPredictionResponse.FromString,
                _registered_method=True)
        self.UpdatePrediction = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/UpdatePrediction',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.UpdatePredictionRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.UpdatePredictionResponse.FromString,
                _registered_method=True)
        self.DeletePrediction = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/DeletePrediction',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DeletePredictionRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DeletePredictionResponse.FromString,
                _registered_method=True)
        self.DownloadPrediction = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/DownloadPrediction',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DownloadPredictionRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DownloadPredictionResponse.FromString,
                _registered_method=True)
        self.AbortPrediction = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/AbortPrediction',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.AbortPredictionRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.AbortPredictionResponse.FromString,
                _registered_method=True)


class PredictionServiceServicer(object):
    """///// Prediction Service ///////

    """

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

    def DownloadPrediction(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def AbortPrediction(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_PredictionServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListPredictions': grpc.unary_unary_rpc_method_handler(
                    servicer.ListPredictions,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.ListPredictionsRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.ListPredictionsResponse.SerializeToString,
            ),
            'CreatePrediction': grpc.unary_unary_rpc_method_handler(
                    servicer.CreatePrediction,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.CreatePredictionRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.CreatePredictionResponse.SerializeToString,
            ),
            'GetPrediction': grpc.unary_unary_rpc_method_handler(
                    servicer.GetPrediction,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.GetPredictionRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.GetPredictionResponse.SerializeToString,
            ),
            'UpdatePrediction': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdatePrediction,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.UpdatePredictionRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.UpdatePredictionResponse.SerializeToString,
            ),
            'DeletePrediction': grpc.unary_unary_rpc_method_handler(
                    servicer.DeletePrediction,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DeletePredictionRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DeletePredictionResponse.SerializeToString,
            ),
            'DownloadPrediction': grpc.unary_unary_rpc_method_handler(
                    servicer.DownloadPrediction,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DownloadPredictionRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DownloadPredictionResponse.SerializeToString,
            ),
            'AbortPrediction': grpc.unary_unary_rpc_method_handler(
                    servicer.AbortPrediction,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.AbortPredictionRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.AbortPredictionResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modelaapi.services.prediction.v1.PredictionService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
    server.add_registered_method_handlers('github.com.metaprov.modelaapi.services.prediction.v1.PredictionService', rpc_method_handlers)


 # This class is part of an EXPERIMENTAL API.
class PredictionService(object):
    """///// Prediction Service ///////

    """

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
        return grpc.experimental.unary_unary(
            request,
            target,
            '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/ListPredictions',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.ListPredictionsRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.ListPredictionsResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

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
        return grpc.experimental.unary_unary(
            request,
            target,
            '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/CreatePrediction',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.CreatePredictionRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.CreatePredictionResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

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
        return grpc.experimental.unary_unary(
            request,
            target,
            '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/GetPrediction',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.GetPredictionRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.GetPredictionResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

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
        return grpc.experimental.unary_unary(
            request,
            target,
            '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/UpdatePrediction',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.UpdatePredictionRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.UpdatePredictionResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

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
        return grpc.experimental.unary_unary(
            request,
            target,
            '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/DeletePrediction',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DeletePredictionRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DeletePredictionResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def DownloadPrediction(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/DownloadPrediction',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DownloadPredictionRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.DownloadPredictionResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def AbortPrediction(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/github.com.metaprov.modelaapi.services.prediction.v1.PredictionService/AbortPrediction',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.AbortPredictionRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_prediction_dot_v1_dot_prediction__pb2.AbortPredictionResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)
