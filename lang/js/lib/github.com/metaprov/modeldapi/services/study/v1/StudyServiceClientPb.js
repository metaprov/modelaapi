/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.study.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_study_v1_study_pb from '../../../../../../github.com/metaprov/modeldapi/services/study/v1/study_pb';
var StudyServiceClient = /** @class */ (function () {
    function StudyServiceClient(hostname, credentials, options) {
        this.methodInfoListStudies = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyResponse.deserializeBinary);
        this.methodInfoCreateStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyResponse.deserializeBinary);
        this.methodInfoGetStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyResponse.deserializeBinary);
        this.methodInfoUpdateStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyResponse.deserializeBinary);
        this.methodInfoDeleteStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyResponse.deserializeBinary);
        this.methodInfoCreateStudyProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileResponse.deserializeBinary);
        this.methodInfoGetStudyProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileResponse.deserializeBinary);
        this.methodInfoAbortStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyResponse.deserializeBinary);
        this.methodInfoPauseStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyResponse.deserializeBinary);
        this.methodInfoResumeStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyResponse.deserializeBinary);
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
    StudyServiceClient.prototype.listStudies = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/ListStudies', request, metadata || {}, this.methodInfoListStudies, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/ListStudies', request, metadata || {}, this.methodInfoListStudies);
    };
    StudyServiceClient.prototype.createStudy = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/CreateStudy', request, metadata || {}, this.methodInfoCreateStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/CreateStudy', request, metadata || {}, this.methodInfoCreateStudy);
    };
    StudyServiceClient.prototype.getStudy = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/GetStudy', request, metadata || {}, this.methodInfoGetStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/GetStudy', request, metadata || {}, this.methodInfoGetStudy);
    };
    StudyServiceClient.prototype.updateStudy = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/UpdateStudy', request, metadata || {}, this.methodInfoUpdateStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/UpdateStudy', request, metadata || {}, this.methodInfoUpdateStudy);
    };
    StudyServiceClient.prototype.deleteStudy = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/DeleteStudy', request, metadata || {}, this.methodInfoDeleteStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/DeleteStudy', request, metadata || {}, this.methodInfoDeleteStudy);
    };
    StudyServiceClient.prototype.createStudyProfile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/CreateStudyProfile', request, metadata || {}, this.methodInfoCreateStudyProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/CreateStudyProfile', request, metadata || {}, this.methodInfoCreateStudyProfile);
    };
    StudyServiceClient.prototype.getStudyProfile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/GetStudyProfile', request, metadata || {}, this.methodInfoGetStudyProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/GetStudyProfile', request, metadata || {}, this.methodInfoGetStudyProfile);
    };
    StudyServiceClient.prototype.abortStudy = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/AbortStudy', request, metadata || {}, this.methodInfoAbortStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/AbortStudy', request, metadata || {}, this.methodInfoAbortStudy);
    };
    StudyServiceClient.prototype.pauseStudy = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/PauseStudy', request, metadata || {}, this.methodInfoPauseStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/PauseStudy', request, metadata || {}, this.methodInfoPauseStudy);
    };
    StudyServiceClient.prototype.resumeStudy = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/ResumeStudy', request, metadata || {}, this.methodInfoResumeStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/ResumeStudy', request, metadata || {}, this.methodInfoResumeStudy);
    };
    return StudyServiceClient;
}());
export { StudyServiceClient };
//# sourceMappingURL=StudyServiceClientPb.js.map