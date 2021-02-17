/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.entity.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_entity_v1_entity_pb from '../../../../../../github.com/metaprov/modeldapi/services/entity/v1/entity_pb';
export declare class EntityServiceClient {
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
    methodInfoListEntities: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesRequest, github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesResponse>;
    listEntities(request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesResponse>;
    listEntities(request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.ListEntitiesResponse>;
    methodInfoCreateEntity: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityRequest, github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityResponse>;
    createEntity(request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityResponse>;
    createEntity(request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.CreateEntityResponse>;
    methodInfoGetEntity: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityRequest, github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityResponse>;
    getEntity(request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityResponse>;
    getEntity(request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.GetEntityResponse>;
    methodInfoUpdateEntity: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityRequest, github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityResponse>;
    updateEntity(request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityResponse>;
    updateEntity(request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.UpdateEntityResponse>;
    methodInfoDeleteEntity: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityRequest, github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityResponse>;
    deleteEntity(request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityResponse>;
    deleteEntity(request: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_entity_v1_entity_pb.DeleteEntityResponse>;
}
