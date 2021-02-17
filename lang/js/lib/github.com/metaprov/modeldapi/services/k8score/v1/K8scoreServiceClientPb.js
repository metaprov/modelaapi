/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.k8score.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb from '../../../../../../github.com/metaprov/modeldapi/services/k8score/v1/k8score_pb';
export class CoreK8sServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoListK8sSecrets = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListSecretResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListSecretResponse.deserializeBinary);
        this.methodInfoGetK8sSecret = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetSecretResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetSecretResponse.deserializeBinary);
        this.methodInfoListK8sServices = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListServicesResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListServicesResponse.deserializeBinary);
        this.methodInfoGetK8sService = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetServiceResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetServiceResponse.deserializeBinary);
        this.methodInfoListK8sDeployments = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListDeploymentsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListDeploymentsResponse.deserializeBinary);
        this.methodInfoGetK8sDeployment = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetDeploymentResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetDeploymentResponse.deserializeBinary);
        this.methodInfoListK8sPods = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListPodsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListPodsResponse.deserializeBinary);
        this.methodInfoGetK8sPod = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetPodResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetPodResponse.deserializeBinary);
        this.methodInfoListK8sJobs = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListJobsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListJobsResponse.deserializeBinary);
        this.methodInfoGetK8sJob = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetJobResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetJobResponse.deserializeBinary);
        this.methodInfoListEvents = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListEventsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListEventsResponse.deserializeBinary);
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
    listK8sSecrets(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sSecrets', request, metadata || {}, this.methodInfoListK8sSecrets, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sSecrets', request, metadata || {}, this.methodInfoListK8sSecrets);
    }
    getK8sSecret(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sSecret', request, metadata || {}, this.methodInfoGetK8sSecret, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sSecret', request, metadata || {}, this.methodInfoGetK8sSecret);
    }
    listK8sServices(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sServices', request, metadata || {}, this.methodInfoListK8sServices, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sServices', request, metadata || {}, this.methodInfoListK8sServices);
    }
    getK8sService(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sService', request, metadata || {}, this.methodInfoGetK8sService, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sService', request, metadata || {}, this.methodInfoGetK8sService);
    }
    listK8sDeployments(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sDeployments', request, metadata || {}, this.methodInfoListK8sDeployments, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sDeployments', request, metadata || {}, this.methodInfoListK8sDeployments);
    }
    getK8sDeployment(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sDeployment', request, metadata || {}, this.methodInfoGetK8sDeployment, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sDeployment', request, metadata || {}, this.methodInfoGetK8sDeployment);
    }
    listK8sPods(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sPods', request, metadata || {}, this.methodInfoListK8sPods, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sPods', request, metadata || {}, this.methodInfoListK8sPods);
    }
    getK8sPod(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sPod', request, metadata || {}, this.methodInfoGetK8sPod, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sPod', request, metadata || {}, this.methodInfoGetK8sPod);
    }
    listK8sJobs(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sJobs', request, metadata || {}, this.methodInfoListK8sJobs, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sJobs', request, metadata || {}, this.methodInfoListK8sJobs);
    }
    getK8sJob(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sJob', request, metadata || {}, this.methodInfoGetK8sJob, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sJob', request, metadata || {}, this.methodInfoGetK8sJob);
    }
    listEvents(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListEvents', request, metadata || {}, this.methodInfoListEvents, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListEvents', request, metadata || {}, this.methodInfoListEvents);
    }
}
