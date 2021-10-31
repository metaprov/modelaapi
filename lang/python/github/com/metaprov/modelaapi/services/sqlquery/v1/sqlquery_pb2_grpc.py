# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modelaapi.services.sqlquery.v1 import sqlquery_pb2 as github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2


class SqlQueryServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListSqlQueries = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/ListSqlQueries',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.ListSqlQueriesRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.ListSqlQueriesResponse.FromString,
                )
        self.CreateSqlQuery = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/CreateSqlQuery',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.CreateSqlQueryRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.CreateSqlQueryResponse.FromString,
                )
        self.GetSqlQuery = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/GetSqlQuery',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.GetSqlQueryRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.GetSqlQueryResponse.FromString,
                )
        self.UpdateSqlQuery = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/UpdateSqlQuery',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.UpdateSqlQueryRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.UpdateSqlQueryResponse.FromString,
                )
        self.DeleteSqlQuery = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/DeleteSqlQuery',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.DeleteSqlQueryRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.DeleteSqlQueryResponse.FromString,
                )
        self.PauseSqlQuery = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/PauseSqlQuery',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.PauseSqlQueryRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.PauseSqlQueryResponse.FromString,
                )
        self.ResumeSqlQuery = channel.unary_unary(
                '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/ResumeSqlQuery',
                request_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.ResumeSqlQueryRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.ResumeSqlQueryResponse.FromString,
                )


class SqlQueryServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListSqlQueries(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateSqlQuery(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetSqlQuery(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateSqlQuery(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteSqlQuery(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def PauseSqlQuery(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ResumeSqlQuery(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_SqlQueryServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListSqlQueries': grpc.unary_unary_rpc_method_handler(
                    servicer.ListSqlQueries,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.ListSqlQueriesRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.ListSqlQueriesResponse.SerializeToString,
            ),
            'CreateSqlQuery': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateSqlQuery,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.CreateSqlQueryRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.CreateSqlQueryResponse.SerializeToString,
            ),
            'GetSqlQuery': grpc.unary_unary_rpc_method_handler(
                    servicer.GetSqlQuery,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.GetSqlQueryRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.GetSqlQueryResponse.SerializeToString,
            ),
            'UpdateSqlQuery': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateSqlQuery,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.UpdateSqlQueryRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.UpdateSqlQueryResponse.SerializeToString,
            ),
            'DeleteSqlQuery': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteSqlQuery,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.DeleteSqlQueryRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.DeleteSqlQueryResponse.SerializeToString,
            ),
            'PauseSqlQuery': grpc.unary_unary_rpc_method_handler(
                    servicer.PauseSqlQuery,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.PauseSqlQueryRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.PauseSqlQueryResponse.SerializeToString,
            ),
            'ResumeSqlQuery': grpc.unary_unary_rpc_method_handler(
                    servicer.ResumeSqlQuery,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.ResumeSqlQueryRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.ResumeSqlQueryResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class SqlQueryService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListSqlQueries(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/ListSqlQueries',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.ListSqlQueriesRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.ListSqlQueriesResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateSqlQuery(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/CreateSqlQuery',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.CreateSqlQueryRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.CreateSqlQueryResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetSqlQuery(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/GetSqlQuery',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.GetSqlQueryRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.GetSqlQueryResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateSqlQuery(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/UpdateSqlQuery',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.UpdateSqlQueryRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.UpdateSqlQueryResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteSqlQuery(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/DeleteSqlQuery',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.DeleteSqlQueryRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.DeleteSqlQueryResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def PauseSqlQuery(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/PauseSqlQuery',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.PauseSqlQueryRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.PauseSqlQueryResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ResumeSqlQuery(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modelaapi.services.sqlquery.v1.SqlQueryService/ResumeSqlQuery',
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.ResumeSqlQueryRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modelaapi_dot_services_dot_sqlquery_dot_v1_dot_sqlquery__pb2.ResumeSqlQueryResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
