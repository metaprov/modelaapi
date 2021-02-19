/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.connection.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_connection_v1_connection_pb from '../../../../../../github.com/metaprov/modeldapi/services/connection/v1/connection_pb';
var ConnectionServiceClient = /** @class */ (function () {
    function ConnectionServiceClient(hostname, credentials, options) {
        this.methodInfoListConnections = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsResponse.deserializeBinary);
        this.methodInfoCreateConnection = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionResponse.deserializeBinary);
        this.methodInfoGetConnection = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionResponse.deserializeBinary);
        this.methodInfoUpdateConnection = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionResponse.deserializeBinary);
        this.methodInfoDeleteConnection = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    ConnectionServiceClient.prototype.listConnections = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.connection.v1.ConnectionService/ListConnections', request, metadata || {}, this.methodInfoListConnections, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.connection.v1.ConnectionService/ListConnections', request, metadata || {}, this.methodInfoListConnections);
    };
    ConnectionServiceClient.prototype.createConnection = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.connection.v1.ConnectionService/CreateConnection', request, metadata || {}, this.methodInfoCreateConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.connection.v1.ConnectionService/CreateConnection', request, metadata || {}, this.methodInfoCreateConnection);
    };
    ConnectionServiceClient.prototype.getConnection = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.connection.v1.ConnectionService/GetConnection', request, metadata || {}, this.methodInfoGetConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.connection.v1.ConnectionService/GetConnection', request, metadata || {}, this.methodInfoGetConnection);
    };
    ConnectionServiceClient.prototype.updateConnection = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.connection.v1.ConnectionService/UpdateConnection', request, metadata || {}, this.methodInfoUpdateConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.connection.v1.ConnectionService/UpdateConnection', request, metadata || {}, this.methodInfoUpdateConnection);
    };
    ConnectionServiceClient.prototype.deleteConnection = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.connection.v1.ConnectionService/DeleteConnection', request, metadata || {}, this.methodInfoDeleteConnection, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.connection.v1.ConnectionService/DeleteConnection', request, metadata || {}, this.methodInfoDeleteConnection);
    };
    return ConnectionServiceClient;
}());
export { ConnectionServiceClient };
//# sourceMappingURL=ConnectionServiceClientPb.js.map