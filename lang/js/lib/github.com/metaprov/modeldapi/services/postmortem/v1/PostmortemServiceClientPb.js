/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.postmortem.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb from '../../../../../../github.com/metaprov/modeldapi/services/postmortem/v1/postmortem_pb';
export class PostMortemServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListPostMortems = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.ListPostMortemsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.ListPostMortemsResponse.deserializeBinary);
        this.methodInfoCreatePostMortem = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.CreatePostMortemResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.CreatePostMortemResponse.deserializeBinary);
        this.methodInfoGetPostMortem = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.GetPostMortemResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.GetPostMortemResponse.deserializeBinary);
        this.methodInfoUpdatePostMortem = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemResponse.deserializeBinary);
        this.methodInfoDeletePostMortem = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.DeletePostMortemResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.DeletePostMortemResponse.deserializeBinary);
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
    listPostMortems(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/ListPostMortems', request, metadata || {}, this.methodInfoListPostMortems, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/ListPostMortems', request, metadata || {}, this.methodInfoListPostMortems);
    }
    createPostMortem(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/CreatePostMortem', request, metadata || {}, this.methodInfoCreatePostMortem, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/CreatePostMortem', request, metadata || {}, this.methodInfoCreatePostMortem);
    }
    getPostMortem(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/GetPostMortem', request, metadata || {}, this.methodInfoGetPostMortem, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/GetPostMortem', request, metadata || {}, this.methodInfoGetPostMortem);
    }
    updatePostMortem(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/UpdatePostMortem', request, metadata || {}, this.methodInfoUpdatePostMortem, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/UpdatePostMortem', request, metadata || {}, this.methodInfoUpdatePostMortem);
    }
    deletePostMortem(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/DeletePostMortem', request, metadata || {}, this.methodInfoDeletePostMortem, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/DeletePostMortem', request, metadata || {}, this.methodInfoDeletePostMortem);
    }
}
