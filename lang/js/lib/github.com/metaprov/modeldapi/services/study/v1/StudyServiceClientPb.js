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
export class StudyServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListStudies = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyResponse.deserializeBinary);
        this.methodInfoCreateStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyResponse.deserializeBinary);
        this.methodInfoGetStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyResponse.deserializeBinary);
        this.methodInfoUpdateStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyResponse.deserializeBinary);
        this.methodInfoDeleteStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyResponse.deserializeBinary);
        this.methodInfoCreateStudyProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileResponse.deserializeBinary);
        this.methodInfoGetStudyProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileResponse.deserializeBinary);
        this.methodInfoAbortStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyResponse.deserializeBinary);
        this.methodInfoPauseStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyResponse.deserializeBinary);
        this.methodInfoResumeStudy = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyResponse, (request) => {
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
    listStudies(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/ListStudies', request, metadata || {}, this.methodInfoListStudies, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/ListStudies', request, metadata || {}, this.methodInfoListStudies);
    }
    createStudy(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/CreateStudy', request, metadata || {}, this.methodInfoCreateStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/CreateStudy', request, metadata || {}, this.methodInfoCreateStudy);
    }
    getStudy(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/GetStudy', request, metadata || {}, this.methodInfoGetStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/GetStudy', request, metadata || {}, this.methodInfoGetStudy);
    }
    updateStudy(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/UpdateStudy', request, metadata || {}, this.methodInfoUpdateStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/UpdateStudy', request, metadata || {}, this.methodInfoUpdateStudy);
    }
    deleteStudy(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/DeleteStudy', request, metadata || {}, this.methodInfoDeleteStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/DeleteStudy', request, metadata || {}, this.methodInfoDeleteStudy);
    }
    createStudyProfile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/CreateStudyProfile', request, metadata || {}, this.methodInfoCreateStudyProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/CreateStudyProfile', request, metadata || {}, this.methodInfoCreateStudyProfile);
    }
    getStudyProfile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/GetStudyProfile', request, metadata || {}, this.methodInfoGetStudyProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/GetStudyProfile', request, metadata || {}, this.methodInfoGetStudyProfile);
    }
    abortStudy(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/AbortStudy', request, metadata || {}, this.methodInfoAbortStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/AbortStudy', request, metadata || {}, this.methodInfoAbortStudy);
    }
    pauseStudy(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/PauseStudy', request, metadata || {}, this.methodInfoPauseStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/PauseStudy', request, metadata || {}, this.methodInfoPauseStudy);
    }
    resumeStudy(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.study.v1.StudyService/ResumeStudy', request, metadata || {}, this.methodInfoResumeStudy, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.study.v1.StudyService/ResumeStudy', request, metadata || {}, this.methodInfoResumeStudy);
    }
}
