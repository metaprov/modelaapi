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
var CoreK8sServiceClient = /** @class */ (function () {
    function CoreK8sServiceClient(hostname, credentials, options) {
        this.methodInfoListK8sSecrets = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListSecretResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListSecretResponse.deserializeBinary);
        this.methodInfoGetK8sSecret = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetSecretResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetSecretResponse.deserializeBinary);
        this.methodInfoListK8sServices = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListServicesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListServicesResponse.deserializeBinary);
        this.methodInfoGetK8sService = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetServiceResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetServiceResponse.deserializeBinary);
        this.methodInfoListK8sDeployments = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListDeploymentsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListDeploymentsResponse.deserializeBinary);
        this.methodInfoGetK8sDeployment = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetDeploymentResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetDeploymentResponse.deserializeBinary);
        this.methodInfoListK8sPods = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListPodsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListPodsResponse.deserializeBinary);
        this.methodInfoGetK8sPod = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetPodResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetPodResponse.deserializeBinary);
        this.methodInfoListK8sJobs = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListJobsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListJobsResponse.deserializeBinary);
        this.methodInfoGetK8sJob = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetJobResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetJobResponse.deserializeBinary);
        this.methodInfoListEvents = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListEventsResponse, function (request) {
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
    CoreK8sServiceClient.prototype.listK8sSecrets = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sSecrets', request, metadata || {}, this.methodInfoListK8sSecrets, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sSecrets', request, metadata || {}, this.methodInfoListK8sSecrets);
    };
    CoreK8sServiceClient.prototype.getK8sSecret = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sSecret', request, metadata || {}, this.methodInfoGetK8sSecret, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sSecret', request, metadata || {}, this.methodInfoGetK8sSecret);
    };
    CoreK8sServiceClient.prototype.listK8sServices = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sServices', request, metadata || {}, this.methodInfoListK8sServices, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sServices', request, metadata || {}, this.methodInfoListK8sServices);
    };
    CoreK8sServiceClient.prototype.getK8sService = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sService', request, metadata || {}, this.methodInfoGetK8sService, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sService', request, metadata || {}, this.methodInfoGetK8sService);
    };
    CoreK8sServiceClient.prototype.listK8sDeployments = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sDeployments', request, metadata || {}, this.methodInfoListK8sDeployments, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sDeployments', request, metadata || {}, this.methodInfoListK8sDeployments);
    };
    CoreK8sServiceClient.prototype.getK8sDeployment = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sDeployment', request, metadata || {}, this.methodInfoGetK8sDeployment, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sDeployment', request, metadata || {}, this.methodInfoGetK8sDeployment);
    };
    CoreK8sServiceClient.prototype.listK8sPods = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sPods', request, metadata || {}, this.methodInfoListK8sPods, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sPods', request, metadata || {}, this.methodInfoListK8sPods);
    };
    CoreK8sServiceClient.prototype.getK8sPod = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sPod', request, metadata || {}, this.methodInfoGetK8sPod, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sPod', request, metadata || {}, this.methodInfoGetK8sPod);
    };
    CoreK8sServiceClient.prototype.listK8sJobs = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sJobs', request, metadata || {}, this.methodInfoListK8sJobs, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListK8sJobs', request, metadata || {}, this.methodInfoListK8sJobs);
    };
    CoreK8sServiceClient.prototype.getK8sJob = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sJob', request, metadata || {}, this.methodInfoGetK8sJob, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/GetK8sJob', request, metadata || {}, this.methodInfoGetK8sJob);
    };
    CoreK8sServiceClient.prototype.listEvents = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListEvents', request, metadata || {}, this.methodInfoListEvents, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.k8score.v1.CoreK8sService/ListEvents', request, metadata || {}, this.methodInfoListEvents);
    };
    return CoreK8sServiceClient;
}());
export { CoreK8sServiceClient };
//# sourceMappingURL=K8scoreServiceClientPb.js.map