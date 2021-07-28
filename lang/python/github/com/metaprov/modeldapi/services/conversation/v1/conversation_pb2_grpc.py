# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.review.v1 import review_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2


class ReviewServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListReviews = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.review.v1.ReviewService/ListReviews',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.ListReviewRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.ListReviewResponse.FromString,
                )
        self.CreateReview = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.review.v1.ReviewService/CreateReview',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.CreateReviewRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.CreateReviewResponse.FromString,
                )
        self.GetReview = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.review.v1.ReviewService/GetReview',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.GetReviewRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.GetReviewResponse.FromString,
                )
        self.UpdateReview = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.review.v1.ReviewService/UpdateReview',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.UpdateReviewRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.UpdateReviewResponse.FromString,
                )
        self.DeleteReview = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.review.v1.ReviewService/DeleteReview',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.DeleteReviewRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.DeleteReviewResponse.FromString,
                )


class ReviewServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListReviews(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateReview(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetReview(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateReview(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteReview(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ReviewServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListReviews': grpc.unary_unary_rpc_method_handler(
                    servicer.ListReviews,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.ListReviewRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.ListReviewResponse.SerializeToString,
            ),
            'CreateReview': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateReview,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.CreateReviewRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.CreateReviewResponse.SerializeToString,
            ),
            'GetReview': grpc.unary_unary_rpc_method_handler(
                    servicer.GetReview,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.GetReviewRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.GetReviewResponse.SerializeToString,
            ),
            'UpdateReview': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateReview,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.UpdateReviewRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.UpdateReviewResponse.SerializeToString,
            ),
            'DeleteReview': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteReview,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.DeleteReviewRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.DeleteReviewResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeldapi.services.review.v1.ReviewService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ReviewService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListReviews(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.review.v1.ReviewService/ListReviews',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.ListReviewRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.ListReviewResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateReview(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.review.v1.ReviewService/CreateReview',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.CreateReviewRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.CreateReviewResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetReview(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.review.v1.ReviewService/GetReview',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.GetReviewRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.GetReviewResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateReview(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.review.v1.ReviewService/UpdateReview',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.UpdateReviewRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.UpdateReviewResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteReview(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.review.v1.ReviewService/DeleteReview',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.DeleteReviewRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_review_dot_v1_dot_review__pb2.DeleteReviewResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
