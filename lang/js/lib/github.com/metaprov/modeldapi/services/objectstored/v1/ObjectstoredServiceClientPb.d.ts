/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.objectstored.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb from '../../../../../../github.com/metaprov/modeldapi/services/objectstored/v1/objectstored_pb';
export declare class ObjectstoreServiceClient {
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
    methodInfoIngest: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectRequest, github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;
    ingest(request: github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;
    ingest(request: github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;
    methodInfoArchive: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectRequest, github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;
    archive(request: github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;
    archive(request: github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;
    methodInfoRecover: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectRequest, github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;
    recover(request: github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;
    recover(request: github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectResponse>;
    methodInfoExistInVirtualBucket: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectRequest, github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ExistInVirtualBucketResponse>;
    existInVirtualBucket(request: github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ExistInVirtualBucketResponse>;
    existInVirtualBucket(request: github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ObjectRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ExistInVirtualBucketResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_objectstored_v1_objectstored_pb.ExistInVirtualBucketResponse>;
}
