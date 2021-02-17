/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.cloudsd.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb from '../../../../../../github.com/metaprov/modeldapi/services/cloudsd/v1/cloudsd_pb';
export declare class CloudsServiceClient {
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
    methodInfoDownload: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileDownloadRequest, github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileDownloadResponse>;
    download(request: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileDownloadRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileDownloadResponse>;
    download(request: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileDownloadRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileDownloadResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileDownloadResponse>;
    methodInfoUpload: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileUploadRequest, github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileUploadResponse>;
    upload(request: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileUploadRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileUploadResponse>;
    upload(request: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileUploadRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileUploadResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.FileUploadResponse>;
    methodInfoKeyExistInVirtualBucket: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.KeyExistInVirtualBucketRequest, github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.KeyExistInVirtualBucketResponse>;
    keyExistInVirtualBucket(request: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.KeyExistInVirtualBucketRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.KeyExistInVirtualBucketResponse>;
    keyExistInVirtualBucket(request: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.KeyExistInVirtualBucketRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.KeyExistInVirtualBucketResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.KeyExistInVirtualBucketResponse>;
    methodInfoVirtualBucketExist: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.VirtualBucketExistRequest, github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.VirtualBucketExistResponse>;
    virtualBucketExist(request: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.VirtualBucketExistRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.VirtualBucketExistResponse>;
    virtualBucketExist(request: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.VirtualBucketExistRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.VirtualBucketExistResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.VirtualBucketExistResponse>;
    methodInfoCreateVirtualBucketIfNotExist: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.CreateVirtualBucketRequest, github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.CreateVirtualBucketResponse>;
    createVirtualBucketIfNotExist(request: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.CreateVirtualBucketRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.CreateVirtualBucketResponse>;
    createVirtualBucketIfNotExist(request: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.CreateVirtualBucketRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.CreateVirtualBucketResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.CreateVirtualBucketResponse>;
    methodInfoShutdown: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.ShutdownRequest, github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.ShutdownResponse>;
    shutdown(request: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.ShutdownRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.ShutdownResponse>;
    shutdown(request: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.ShutdownRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.ShutdownResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cloudsd_v1_cloudsd_pb.ShutdownResponse>;
}
