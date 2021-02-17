/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.study.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_study_v1_study_pb from '../../../../../../github.com/metaprov/modeldapi/services/study/v1/study_pb';
export declare class StudyServiceClient {
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
    methodInfoListStudies: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyRequest, github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyResponse>;
    listStudies(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyResponse>;
    listStudies(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.ListStudyResponse>;
    methodInfoCreateStudy: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyRequest, github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyResponse>;
    createStudy(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyResponse>;
    createStudy(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyResponse>;
    methodInfoGetStudy: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyRequest, github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyResponse>;
    getStudy(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyResponse>;
    getStudy(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyResponse>;
    methodInfoUpdateStudy: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyRequest, github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyResponse>;
    updateStudy(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyResponse>;
    updateStudy(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.UpdateStudyResponse>;
    methodInfoDeleteStudy: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyRequest, github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyResponse>;
    deleteStudy(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyResponse>;
    deleteStudy(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.DeleteStudyResponse>;
    methodInfoCreateStudyProfile: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileRequest, github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileResponse>;
    createStudyProfile(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileResponse>;
    createStudyProfile(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.CreateStudyProfileResponse>;
    methodInfoGetStudyProfile: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileRequest, github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileResponse>;
    getStudyProfile(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileResponse>;
    getStudyProfile(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.GetStudyProfileResponse>;
    methodInfoAbortStudy: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyRequest, github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyResponse>;
    abortStudy(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyResponse>;
    abortStudy(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.AbortStudyResponse>;
    methodInfoPauseStudy: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyRequest, github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyResponse>;
    pauseStudy(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyResponse>;
    pauseStudy(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.PauseStudyResponse>;
    methodInfoResumeStudy: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyRequest, github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyResponse>;
    resumeStudy(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyResponse>;
    resumeStudy(request: github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_study_v1_study_pb.ResumeStudyResponse>;
}
