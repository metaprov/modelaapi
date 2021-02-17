/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.connection.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_connection_v1_connection_pb from '../../../../../../github.com/metaprov/modeldapi/services/connection/v1/connection_pb';
export declare class ConnectionServiceClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodInfoListConnections: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsRequest, github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsResponse>;
    listConnections(request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsResponse>;
    listConnections(request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.ListConnectionsResponse>;
    methodInfoCreateConnection: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionRequest, github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionResponse>;
    createConnection(request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionResponse>;
    createConnection(request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.CreateConnectionResponse>;
    methodInfoGetConnection: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionRequest, github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionResponse>;
    getConnection(request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionResponse>;
    getConnection(request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.GetConnectionResponse>;
    methodInfoUpdateConnection: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionRequest, github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionResponse>;
    updateConnection(request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionResponse>;
    updateConnection(request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.UpdateConnectionResponse>;
    methodInfoDeleteConnection: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionRequest, github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionResponse>;
    deleteConnection(request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionResponse>;
    deleteConnection(request: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_connection_v1_connection_pb.DeleteConnectionResponse>;
}
