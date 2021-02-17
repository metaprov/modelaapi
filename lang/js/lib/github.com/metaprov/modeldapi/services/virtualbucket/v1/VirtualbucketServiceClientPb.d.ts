/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.virtualbucket.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb from '../../../../../../github.com/metaprov/modeldapi/services/virtualbucket/v1/virtualbucket_pb';
export declare class VirtualBucketServiceClient {
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
    methodInfoListVirtualBuckets: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsRequest, github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsResponse>;
    listVirtualBuckets(request: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsResponse>;
    listVirtualBuckets(request: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.ListVirtualBucketsResponse>;
    methodInfoCreateVirtualBucket: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketRequest, github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketResponse>;
    createVirtualBucket(request: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketResponse>;
    createVirtualBucket(request: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.CreateVirtualBucketResponse>;
    methodInfoGetVirtualBucket: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketRequest, github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketResponse>;
    getVirtualBucket(request: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketResponse>;
    getVirtualBucket(request: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.GetVirtualBucketResponse>;
    methodInfoUpdateVirtualBucket: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketRequest, github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketResponse>;
    updateVirtualBucket(request: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketResponse>;
    updateVirtualBucket(request: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.UpdateVirtualBucketResponse>;
    methodInfoDeleteVirtualBucket: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketRequest, github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketResponse>;
    deleteVirtualBucket(request: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketResponse>;
    deleteVirtualBucket(request: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_virtualbucket_v1_virtualbucket_pb.DeleteVirtualBucketResponse>;
}
