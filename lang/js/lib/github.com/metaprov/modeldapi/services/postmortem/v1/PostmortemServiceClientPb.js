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
var PostMortemServiceClient = /** @class */ (function () {
    function PostMortemServiceClient(hostname, credentials, options) {
        this.methodInfoListPostMortems = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.ListPostMortemsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.ListPostMortemsResponse.deserializeBinary);
        this.methodInfoCreatePostMortem = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.CreatePostMortemResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.CreatePostMortemResponse.deserializeBinary);
        this.methodInfoGetPostMortem = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.GetPostMortemResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.GetPostMortemResponse.deserializeBinary);
        this.methodInfoUpdatePostMortem = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.UpdatePostMortemResponse.deserializeBinary);
        this.methodInfoDeletePostMortem = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_postmortem_v1_postmortem_pb.DeletePostMortemResponse, function (request) {
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
    PostMortemServiceClient.prototype.listPostMortems = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/ListPostMortems', request, metadata || {}, this.methodInfoListPostMortems, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/ListPostMortems', request, metadata || {}, this.methodInfoListPostMortems);
    };
    PostMortemServiceClient.prototype.createPostMortem = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/CreatePostMortem', request, metadata || {}, this.methodInfoCreatePostMortem, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/CreatePostMortem', request, metadata || {}, this.methodInfoCreatePostMortem);
    };
    PostMortemServiceClient.prototype.getPostMortem = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/GetPostMortem', request, metadata || {}, this.methodInfoGetPostMortem, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/GetPostMortem', request, metadata || {}, this.methodInfoGetPostMortem);
    };
    PostMortemServiceClient.prototype.updatePostMortem = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/UpdatePostMortem', request, metadata || {}, this.methodInfoUpdatePostMortem, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/UpdatePostMortem', request, metadata || {}, this.methodInfoUpdatePostMortem);
    };
    PostMortemServiceClient.prototype.deletePostMortem = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/DeletePostMortem', request, metadata || {}, this.methodInfoDeletePostMortem, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeld.services.postmortem.v1.PostMortemService/DeletePostMortem', request, metadata || {}, this.methodInfoDeletePostMortem);
    };
    return PostMortemServiceClient;
}());
export { PostMortemServiceClient };
//# sourceMappingURL=PostmortemServiceClientPb.js.map